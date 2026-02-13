import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toode } from '../../services/toode';


@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule],
  templateUrl: './lisa-toode.html',
  styleUrl: './lisa-toode.css',
})
export class LisaToode {
  sonum = "Siin saad lisada toote!";
  nimi = "";

  constructor(private toodeServive: Toode) {}

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
  this.toodeServive.tooted.push(this.nimi);
  this.sonum = "Lisatud toode: " + this.nimi
}
}