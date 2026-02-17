import { Component } from '@angular/core';
import { TootajaService } from '../../services/tootaja.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-tootajad',
  imports: [FormsModule],
  templateUrl: './lisa-tootajad.html',
  styleUrl: './lisa-tootajad.css',
})
export class LisaTootajad {
    sonum = "Lisa uus töötaja";
    nimi = "";
    amet = "";
    telefon = "";
    vanus = 0;

  constructor(private tootajaService: TootajaService) {}

  lisa () {

    if (/\d/.test(this.nimi)) {
      alert("Nimi ei tohi sisaldada numbreid!");
      return;
    }

    if (this.nimi.trim() === "") {
      alert("Tühja nimega ei saa lisada!");
      return;

    }

    if (this.nimi.length < 2) {
      alert("Liiga lühike nimi!");
      return;
    }

//     if (!/^[A-ZÕÄÖÜ]/.test(this.nimi)) {
//     alert("Nimi peab algama suure algustähega!");
//     return;
// }


    if (!/^([A-ZÕÄÖÜ][a-zõäöü]+)(\s[A-ZÕÄÖÜ][a-zõäöü]+)*$/.test(this.nimi)) {
    alert("Nimi peab algama suure algustähega!!");
    return;
    }

    this.tootajaService.tootajad.push({
      nimi: this.nimi,
      amet: this.amet,
      telefon: this.telefon,
      vanus: this.vanus
    });
    this.sonum = "Lisasid töötaja: "+ this.nimi;

  

  this.nimi = "";
  this.amet = "";
  this.telefon = "";
  this.vanus = 0;

  }
}
