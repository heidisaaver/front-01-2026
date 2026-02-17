import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EsindusService } from '../../services/esindus';

@Component({
  selector: 'app-lisa-esindused',
  imports: [FormsModule],
  templateUrl: './lisa-esindused.html',
  styleUrl: './lisa-esindused.css',
})
export class LisaEsindused {
  nimi = "";
  aadress = "";
  telefon = "";

  constructor(private esindusService: EsindusService) {}

  lisa() {
    // if (this.nimi.trim() !== "" && this.aadress.trim() !== "" && this.telefon.trim() !== "") {
    //   this.esindused.push({nimi: this.nimi, aadress: this.aadress, telefon: this.telefon});
    //   this.nimi = "";
    //   this.aadress = "";
    //   this.telefon = "";
    // }  - need pakkus programm ise automaatselt

    // ngOnInit juhul kui peaks esindusi välja kuvama (võtan kõik esindused)

    if (this.nimi.trim() === "") {
      alert("Nimi ei saa olla tühi!");
      return;
    }

   if (this.aadress.trim() === "") {
      alert("Aadress ei saa olla tühi!");
      return;
    }

   if (this.telefon.trim() === "") {
      alert("Telefon ei saa olla tühi!");
      return;
    }


    this.esindusService.esindused.push(
      {"nimi": this.nimi, "aadress": this.aadress, "telefon": this.telefon}
    );
    this.nimi = "";
    this.aadress = "";
    this.telefon = "";
  }
}
