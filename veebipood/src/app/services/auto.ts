import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  autod = [
  {"nimi": "Mercedes", "hind": 120000, "pilt": "mercedes.jpg", "aktiivne": false}, 
  {"nimi": "Ferrari", "hind": 250000, "pilt": "", "aktiivne": false}, 
  {"nimi": "Toyota", "hind": 30000, "pilt": "", "aktiivne": true}, 
  {"nimi": "Opel", "hind": 25000, "pilt": "", "aktiivne": true}, 
  {"nimi": "Volvo", "hind": 45000, "pilt": "", "aktiivne": true}, 
  {"nimi": "Hyundai", "hind": 28000, "pilt": "", "aktiivne": true}, 
  {"nimi": "BMW", "hind": 50000, "pilt": "", "aktiivne": true}, 
  {"nimi": "Ford", "hind": 35000, "pilt": "", "aktiivne": true}, 
  {"nimi": "Aston Martin", "hind": 150000, "pilt": "", "aktiivne": false}
];
}
