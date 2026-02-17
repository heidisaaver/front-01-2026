import { Component, OnInit } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';
import { Auto } from '../models/Auto';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.html',
  styleUrl: './ostukorv.css',
})
export class Ostukorv implements OnInit {
  ostukorv: Auto[] | Toode[] = [];

  // toodeteArv = 4;
  ostukorviSumma = 123;

  constructor(private ostukorvService: OstukorvService) {}

  ngOnInit() {
    this.ostukorv = this.ostukorvService.ostukorv;
  }

  tyhjenda() {
  // this.toodeteArv = 0;
  this.ostukorv = [];
  this.ostukorviSumma = 0;
}


kustuta(index: number) {
  this.ostukorv.splice(index, 1);
}

arvutaKokku() {
  let summa = 0;
  // summa = summa + 120000;
  // summa = summa +80000;
  this.ostukorv.forEach(toode => summa = summa + toode.hind);

  return summa;


}


}


