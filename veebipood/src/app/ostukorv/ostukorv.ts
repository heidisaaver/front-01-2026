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
export class Ostukorv  {
  ostukorv: Auto[] | Toode[] = JSON.parse(localStorage.getItem("ostukorv") || "[]"  );

  // toodeteArv = 4;
  ostukorviSumma = 123;

  // constructor(private ostukorvService: OstukorvService) {}

  // ngOnInit() {
  //   this.ostukorv = this.ostukorvService.ostukorv;
  // }

  tyhjenda() {
  // this.toodeteArv = 0;
  this.ostukorv = [];
  this.ostukorviSumma = 0;
  localStorage.setItem("ostukorv", "[]");
}


kustuta(index: number) {
  this.ostukorv.splice(index, 1);
  localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
}

arvutaKokku() {
  let summa = 0;
  // summa = summa + 120000;
  // summa = summa +80000;
  this.ostukorv.forEach(toode => summa = summa + toode.hind);

  return summa;


}




}


