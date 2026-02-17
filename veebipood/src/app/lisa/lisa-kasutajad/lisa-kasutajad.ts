import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-lisa-kasutajad',
  imports: [FormsModule],
  templateUrl: './lisa-kasutajad.html',
  styleUrl: './lisa-kasutajad.css',
})
export class LisaKasutajad {
  nimi = '';
  epost = '';
  parool = '';
  vanus = 0;
  sonum = 'Lisa uus kasutaja!';

  constructor(private kasutajaService: KasutajaService ) { }

  lisaKasutaja() {

    if (!/^([A-ZÕÄÖÜ][a-zõäöü]+)(\s[A-ZÕÄÖÜ][a-zõäöü]+)*$/.test(this.nimi)) {
    alert("Nimi peab algama suure algustähega!!");
    return;
    }
    if (this.nimi && this.epost && this.parool && this.vanus) {
      
      this.kasutajaService.kasutajad.push({
        "nimi": this.nimi,
        "epost": this.epost,
        "parool": this.parool,
        "vanus": this.vanus
      });
      
    } else {
      alert('Kõik väljad peavad olema täidetud!');
    }

    this.nimi = "";
    this.epost = "";
    this.parool = "";
    this.vanus = 0;
  }

}
