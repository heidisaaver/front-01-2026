import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  imports: [FormsModule],
  templateUrl: './seaded.html',
  styleUrl: './seaded.css',
})
export class Seaded {
  keel = "en";
  email = "";
  aadress = "";
  telefon = "";

  isikukood = "";
  parool = "";

  sisselogitud = false;


  logisisse () {

    if (/^[0-9]+$/.test(this.isikukood) === false) {
        alert("Isikukood peab sisaldama ainult numbreid!");
        return

    }
      
    if (this.isikukood.length !== 11) {
        alert("Isikukoodi pikkus pole korrektne!");
        return;
    }

    if (this.parool !== "admin") {
        alert("Parool pole korrektne!");
        return;
    }


    alert("Edukalt sisselogitud")
    this.sisselogitud = true;

 }
  sisesta() {
    alert(`Sisestatud: email: ${this.email} , aadress: ${this.aadress} , telefon: ${this.telefon}`);
    // alert("Sisestatud: email:" + this.email + ", aadress:" + this.aadress + ", telefon: " + this.telefon);
}
}

