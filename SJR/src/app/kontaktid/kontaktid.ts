import { Component } from '@angular/core';

@Component({
  selector: 'app-kontaktid',
  imports: [],
  templateUrl: './kontaktid.html',
  styleUrl: './kontaktid.css',
})
export class Kontaktid {
  aadress = "Tallinn";
  telefon = "5512345";
  email = "bla@baa.com";
  ingliseKeelne = "ei";

  inglisekeelde() {
    this.aadress = "Tallinn, Estonia";
    this.telefon = "+372 5512345";
    this.email = "e-mail is bla@baa.com";
    this.ingliseKeelne = "jah";
  }

  


}
