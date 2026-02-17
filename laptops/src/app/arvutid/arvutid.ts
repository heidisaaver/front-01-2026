import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-arvutid',
  imports: [FormsModule],
  templateUrl: './arvutid.html',
  styleUrl: './arvutid.css',
})
export class Arvutid {

  sonum: string = '';
  kasutajanimi: string = '';
  parool: string = '';
  sisselogitud: string = 'ei';


  logiSisse() {
    if (this.parool === '123') {
      this.sisselogitud = 'jah';
      this.sonum = `${this.kasutajanimi}, oled sisselogitud`;
    } else {
      this.sonum = 'Vale parool';
    }

  }

  logiValja() {
    this.sisselogitud = 'ei';
    this.sonum = '';
    this.kasutajanimi = '';
    this.parool = '';
  }



}

