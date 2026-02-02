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

  sisesta() {
    alert(`Sisestatud: email: ${this.email} , aadress: ${this.aadress} , telefon: ${this.telefon}`);
    // alert("Sisestatud: email:" + this.email + ", aadress:" + this.aadress + ", telefon: " + this.telefon);
}
}

