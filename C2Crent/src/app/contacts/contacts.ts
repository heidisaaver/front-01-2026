import { Component, AfterViewInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { FormsModule } from '@angular/forms';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-contacts',
  imports: [FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements AfterViewInit {

  summa = 5;
  kogus = 1;
  customSumma = 0;

  private map: any;
    private shops= [
     {lat: 59.435,  lon: 24.733}, 

     {lat: 58.372, lon: 24.525}, 

     {lat: 58.357, lon: 26.728}  
  ]



   private initMap(): void {
    this.map = L.map('map', {
      center: [ 58.927, 25.588],  
      zoom: 7
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.initMap();

    
      for (const shop of this.shops) {
        const lon = shop.lon;
        const lat = shop.lat;
        const marker = L.marker([lat, lon]);
        
        marker.addTo(this.map);
      }
    
    }




     public sendEmail(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm('service_hjghx4o', 'template_z3czrwe', e.target as HTMLFormElement, {
        publicKey: 'LRKhHYasE5QB6MWAL',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Teade edukalt saadetud, vastame 3 tööpäeva jooksul");
          form.reset();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert("Saatmine ebaõnnestus, palun proovi uuesti.");
        },
      );       
    }

  muudaSumma(uusSumma: number) {
  this.summa = uusSumma;
  this.customSumma = 0;

  }

  pay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const payload =  {
        "account_name": "EUR3D1",
        "nonce": crypto.randomUUID(), // Better to generate a real unique string
        "timestamp": new Date().toISOString(),
        "amount": this.customSumma > 0 ? this.customSumma : this.summa * this.kogus,
       "order_reference": "order-" + Math.floor(Math.random() * 10000),
       "customer_url": "https://webshop-5698.web.app/",
       "api_username": "e36eb40f5ec87fa2"
    }

    fetch (url, {

    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type':'application/json',
      'Authorization': 'Basic ' + btoa('e36eb40f5ec87fa2:7b91a3b9e1b74524c2e9fc282f8ac8cd')
    } 
  }) .then(res => res.json())
     .then(json => window.location.href = json.payment_link);
  }

  }