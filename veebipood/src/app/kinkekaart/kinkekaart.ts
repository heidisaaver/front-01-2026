import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kinkekaart',
  imports: [FormsModule], // selleks et kirjutada HTMLi [(ngModel)]
  templateUrl: './kinkekaart.html',
  styleUrl: './kinkekaart.css',
})
export class Kinkekaart {
  summa = 20;
  kogus = 1;
  email = "";
  customSumma = 0;

//muutuja nimi: summa
//väärtuse andmine on võrdusmärgiga
//algväärtuseks on 20
//rea lõpetame semikooloniga (viisakus)
// = on väärtuse andmiseks
// === kontrollib kas vasak ja parem pool on võrdsed
// == väga ei kasutata võrdleb ilma tüübi kontrollita
//  "7" == 7  võrdne   "7" === 7 ei ole võrdsed

muudaSumma20 () {
  this.summa = 20;
  this.customSumma = 0;
}

muudaSumma50 () {
  this.summa = 50;
  this.customSumma = 0;
}


muudaSumma100 () {
  this.summa = 100;
  this.customSumma = 0;
}



  lisaEmail() {
    if (this.email.trim() === "") {
      alert("Tühja emaili ei saa sisestada");
      return; // katkestab funktsiooni
    }
    if (this.email.includes("@") === false) {
      alert("Email on valel kujul");
      return; // katkestab funktsiooni
    }
   
     if (this.email.length < 5) {
      alert("Email on liiga lühike");
      return; // katkestab funktsiooni
    }

  alert("Email lisatud: " + this.email);

  }

}

//   [] -> [disabled] = "õige või väär"
//  {{}} -> väljakuvamiseks, muutuja sisse
//  () -> sündmuseks
//
