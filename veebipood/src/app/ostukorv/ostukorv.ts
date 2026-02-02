import { Component } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.html',
  styleUrl: './ostukorv.css',
})
export class Ostukorv {
  toodeteArv = 4;
  ostukorviSumma = 123;

  tyhjenda() {
  this.toodeteArv = 0;
  this.ostukorviSumma = 0;
}

}


