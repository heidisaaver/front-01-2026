import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-tegelane',
  imports: [FormsModule],
  templateUrl: './lisa-tegelane.html',
  styleUrl: './lisa-tegelane.css',
})

export class LisaTegelane {

  Eesnimi = "";
  Perenimi = "";
  Asukoht = "";

  sisesta() {
    if (this.Eesnimi === "") {
      alert('Palun sisesta')
      return
    } 

    alert(`Lisasid: ${this.Eesnimi} ${this.Perenimi}, kes elab: ${this.Asukoht}`);
    // alert("Sisestatud: email:" + this.email + ", aadress:" + this.aadress + ", telefon: " + this.telefon);
}

}

