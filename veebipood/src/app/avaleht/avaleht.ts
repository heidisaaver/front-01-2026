import { Component } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  imports: [],
  templateUrl: './avaleht.html',
  styleUrl: './avaleht.css',
})
export class Avaleht {
summa = 0;
laigitud = true;
sonum = "Muuda kogust!";

nulli() {
  this.summa = this.summa = 0;
  this.sonum = "Nullisid koguse!";
}

vahenda() {
  this.summa = this.summa - 1;
  this.sonum = "Vähendasid kogust!";
}

suurenda() {
  this.summa = this.summa + 1;
  this.sonum = "Suurendasid kogust!";
}
}

// helesinine on muutuja. HTML omadused (disalbe, class, src)
// tumesinie on HTMLis  <img>  <button>  <div>
//    javascriptis ->   this.   class    true
//    JS -> sissekirjutatud väärtus
// kollane on funktsioon
// lilla tegevused: eksport, import, if
// oranž (punane)  sõna
// tumeroheline kommentaar
// heleroheline number
// valge  märk: .  =  +  ===  ;  !  
//        Lisaks tekst mida kuvatakse HTMLis
{{{{{{{{{{{{}}}}}}}}}}}}
// sulgude värvides tähendust pole, esimesed on kollased, tema sees on lillad, selle sees sinised ja siis jälle kollased jne

