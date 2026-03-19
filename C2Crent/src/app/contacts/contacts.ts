import { Component, AfterViewInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

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
  imports: [],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts implements AfterViewInit {

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

  }