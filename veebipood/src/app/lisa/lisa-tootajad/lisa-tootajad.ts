import { Component } from '@angular/core';
import { Tootaja } from '../../services/tootaja';
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

  constructor(private tootajaService: Tootaja) {}

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

    this.tootajaService.tootajad.push(this.nimi);
    this.sonum = "Lisasid töötaja: "+ this.nimi;

  }

}
