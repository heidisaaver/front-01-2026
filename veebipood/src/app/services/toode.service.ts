import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToodeService {
  tooted = [
    {"nimi": "Mootoriõli", "hind": 50, "pilt": "", "aktiivne": true},
    {"nimi": "Rehvid", "hind": 200, "pilt": "", "aktiivne": true},
    {"nimi": "Piduriklotsid", "hind": 80, "pilt": "", "aktiivne": true},
    {"nimi": "Õlifilter", "hind": 30, "pilt": "", "aktiivne": false},   
    {"nimi": "Akulaadija", "hind": 60, "pilt": "", "aktiivne": true},
    {"nimi": "Tuuleklaasipuhastid", "hind": 20, "pilt": "", "aktiivne": true},
    {"nimi": "Jahutusvedelik", "hind": 40, "pilt": "", "aktiivne": true},
    {"nimi": "Autopesuvaha", "hind": 25, "pilt": "", "aktiivne": false},
    {"nimi": "Salongifilter", "hind": 35, "pilt": "", "aktiivne": true},
    {"nimi": "Käigukastiõli", "hind": 45, "pilt": " ", "aktiivne": true}

  ];
}

//võiks olla samad asjad nagu autodel.