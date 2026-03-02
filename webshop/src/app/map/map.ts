import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
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
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class Map implements AfterViewInit {
  private map: any;
  private shops= [
    {lat: 59.435,  lon: 24.733}, 

     {lat: 59.430, lon: 24.757}, 

     {lat: 59.434, lon: 24.769}  
  ]



  private initMap(): void {
    this.map = L.map('map', {
      center: [ 59.436, 24.753],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
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
}