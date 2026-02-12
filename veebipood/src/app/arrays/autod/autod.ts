import { Component } from '@angular/core';

@Component({
  selector: 'app-autod',
  imports: [],
  templateUrl: './autod.html',
  styleUrl: './autod.css',
})
export class Autod {
  autod = ["Mercedes", "Ferrari", "Toyota", "Opel", "Volvo", "Hyundai", "BMW", "Ford", "Aston Martin"];

sorteeriAZ() {
  this.autod.sort((a, b) => a.localeCompare(b));
}

sorteeriZA() {

  this.autod.sort((a, b) => b.localeCompare(a));

}

sorteeriVaiksemastSonast() {
  this.autod.sort((a, b) => a.length - b.length);
}

sorteeriSuuremasttSonast() {
  this.autod.sort((a, b) => b.length - a.length);
}

sorteeriKolmasTahtAZ() {

  // this.autod.sort((a, b) => a.localeCompare(b));
  this.autod.sort((a, b) => a[2].localeCompare(b[2]));

}
 
}
