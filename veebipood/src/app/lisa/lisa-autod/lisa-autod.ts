import { Component } from '@angular/core';
import { AutoService } from '../../services/auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-autod',
  imports: [FormsModule],
  templateUrl: './lisa-autod.html',
  styleUrl: './lisa-autod.css',
})
export class LisaAutod {
    nimi = ""
    hind = 0;
    pilt = "";
    aktiivne = false;

  constructor(private autoService: AutoService) {}

  lisa() {
   
    if (this.nimi.trim() === "") {
      alert("Tühja nimega ei saa sisestada!");
      return;

    }

      if (this.nimi.includes("%")) {
      alert("Auto nimes ei tohi olla % märk!");
      return;

    }

     if (this.nimi.length < 3) {
      alert("Auto nimi liiga lühike!");
      return;

    }

  
  this.autoService.autod.push({
    "nimi": this.nimi,
    "hind": this.hind,
    "pilt": this.pilt,
    "aktiivne": this.aktiivne
  });

  this.nimi = "";
  this.hind = 0;
  this.pilt = "";
  this.aktiivne = false;

}
}


