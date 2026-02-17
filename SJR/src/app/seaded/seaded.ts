import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  imports: [FormsModule],
  templateUrl: './seaded.html',
  styleUrl: './seaded.css',
})
export class Seaded {


  sonum: string = '';
  kasutajanimi: string = '';
  parool: string = '';
  sisselogitud: string = 'ei';


  logiSisse() {
    if (this.parool === '987') {
      this.sisselogitud = 'jah';
      this.sonum = `${this.kasutajanimi}, tere-tulemast seadetesse!`;
    } else {
      this.sonum = 'Eksisid parooliga!';
    }

  }

  logiValja() {
    this.sisselogitud = 'ei';
    this.sonum = '';
    this.kasutajanimi = '';
    this.parool = '';
  }

}
