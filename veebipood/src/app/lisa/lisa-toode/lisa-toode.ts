import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToodeService } from '../../services/toode.service';


@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule],
  templateUrl: './lisa-toode.html',
  styleUrl: './lisa-toode.css',
})
export class LisaToode {
  sonum = "Siin saad lisada toote!";
  nimi = "";
  hind = 0;
  pilt = "";
  aktiivne = false;

  constructor(private toodeService: ToodeService) {}

  lisa() {
    
    if (this.nimi.length < 3) {
      alert("Toote nimi liiga lühike");
      return;
    } 
  
    
    if (this.nimi.trim() === "") {
      alert( "Tühja nimega ei saa toodet lisada!");
      return;
  //   } else {
  //   this.sonum = "Lisatud toode: " + this.nimi;
  // }

  

}
  this.toodeService.tooted.push({
    "nimi": this.nimi,
    "hind": this.hind,
    "pilt": this.pilt,
    "aktiivne": this.aktiivne
  });

  this.nimi = "";
  this.hind = 0;
  this.pilt = "";
  this.aktiivne = false;

  // this.sonum = "Lisatud toode: " + this.nimi
}
}