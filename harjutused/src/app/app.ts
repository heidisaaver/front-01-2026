import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('harjutused');

  n2itaKollast = false;
  n2itaRohelist = false;
  n2itaSinist = false;
  n2itaPunast = false;

  nimi: string = "Heidi";
  telefon: string = "12345678";

  onKlikkimisel() {
    this.n2itaKollast = !this.n2itaKollast; 
    console.log(this.n2itaKollast);

  }

  onHiiregaPealeminekul () {
    this.n2itaRohelist = true;
    console.log(this.n2itaRohelist);
  }

  onHiirega2raMinekul () {
    this.n2itaRohelist = false;
    console.log(this.n2itaRohelist);
  }

  hiiregaV2ljakl6psates () {
    this.n2itaPunast = true;
    console.log(this.n2itaPunast);
    setInterval(() => {
      this.n2itaPunast = false;
      console.log(this.n2itaPunast);
    }, 2000);
  }

  klaviatuurilVajutades () {
    window.alert("Vajutasid klaviatuuril!");
  }
  

  lisainfo() {
    this.nimi = this.nimi + "93";
    this.telefon = this.telefon + "9";
  }

}
