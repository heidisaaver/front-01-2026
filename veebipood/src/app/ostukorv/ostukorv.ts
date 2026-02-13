import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.html',
  styleUrl: './ostukorv.css',
})
export class Ostukorv {
  ostukorv = ["Coca", "Fanta", "Sprite"];

  // toodeteArv = 4;
  ostukorviSumma = 123;

  tyhjenda() {
  // this.toodeteArv = 0;
  this.ostukorv = [];
  this.ostukorviSumma = 0;
}


kustuta(index: number) {
  this.ostukorv.splice(index, 1);
}

}


