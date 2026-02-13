import { Component } from '@angular/core';
import { Auto } from '../../services/auto';


@Component({
  selector: 'app-autod',
  imports: [],
  templateUrl: './autod.html',
  styleUrl: './autod.css',
})
export class Autod {
  

  autod: string[] = [];

  constructor(private autoService: Auto) {}

  ngOnInit() {
    this.autod = this.autoService.autod;
  }
  

  reset(){
    this.autod = this.autoService.autod;

  }

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

filtreeri7Tahelised()  {
  this.autod = this.autod.filter(auto => auto.length === 7);

}


filtreeriVahemalt6Tahelised(){
  this.autod = this.autod.filter(auto => auto.length >= 6);

}

filtreeriSisaldabLyhenditER() {
  this.autod = this.autod.filter(auto => auto.includes("er"));

}


filtreeriLoppebTahegaI(){

  this.autod = this.autod.filter(auto => auto.endsWith("i"));

 }

filtreeriTeineTahtonO() {

 this.autod = this.autod.filter(auto => auto[1] === "o");
}


 
}
