import { Component } from '@angular/core';
import { AutoService } from '../../services/auto';
import { Auto } from '../../models/Auto';
import { OstukorvService } from '../../services/ostukorv.service';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-autod',
  imports: [RouterLink],
  templateUrl: './autod.html',
  styleUrl: './autod.css',
})
export class Autod {
  

  autod: Auto[] = [];

  constructor(private autoService: AutoService,
    private ostukorvService: OstukorvService


  ) {}

  ngOnInit() {
    this.autod = this.autoService.autod;
  }

 

  reset(){
    this.autod = this.autoService.autod;

  }

sorteeriAZ() {
  this.autod.sort((a, b) => a.nimi.localeCompare(b.nimi));
}

sorteeriZA() {

  this.autod.sort((a, b) => b.nimi.localeCompare(a.nimi));

}

sorteeriVaiksemastSonast() {
  this.autod.sort((a, b) => a.nimi.length - b.nimi.length);
}

sorteeriSuuremasttSonast() {
  this.autod.sort((a, b) => b.nimi.length - a.nimi.length);
}

sorteeriKolmasTahtAZ() {

  // this.autod.sort((a, b) => a.localeCompare(b));
  this.autod.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));

}

filtreeri7Tahelised()  {
  this.autod = this.autod.filter(auto => auto.nimi.length === 7);

}


filtreeriVahemalt6Tahelised(){
  this.autod = this.autod.filter(auto => auto.nimi.length >= 6);

}

filtreeriSisaldabLyhenditER() {
  this.autod = this.autod.filter(auto => auto.nimi.includes("er"));

}


filtreeriLoppebTahegaI(){

  this.autod = this.autod.filter(auto => auto.nimi.endsWith("i"));

 }

filtreeriTeineTahtonO() {

 this.autod = this.autod.filter(auto => auto.nimi[1] === "o");
}


lisaOstukorvi(auto: Auto) {
  // this.ostukorvService.ostukorv.push(auto);

 const ostukorvLS: Auto[] = JSON.parse(localStorage.getItem ("ostukorv") || "[]");
 ostukorvLS.push(auto);

 

  localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
    
 
  
}




arvutaKokku() {
  let summa = 0;
  this.autod.forEach(auto => summa = summa + auto.hind);
  return summa;

}
}
