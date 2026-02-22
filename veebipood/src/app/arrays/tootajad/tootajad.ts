import { Component } from '@angular/core';
import { TootajaService } from '../../services/tootaja.service';
import { Tootaja } from '../../models/Tootaja';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tootajad',
  imports: [RouterLink],
  templateUrl: './tootajad.html',
  styleUrl: './tootajad.css',
})
export class Tootajad {
  tootajad: Tootaja [] = [];

  constructor(private tootajaService: TootajaService) {}

  ngOnInit() {
    this.tootajad = this.tootajaService.tootajad;
  }

  reset() {
    this.tootajad = this.tootajaService.tootajad;
  }



sorteeriAZ() {
  this.tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi));
}

sorteeriZA() {

  this.tootajad.sort((a, b) => b.nimi.localeCompare(a.nimi));

}

sorteeriVaiksemastSonast() {
  this.tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
}

sorteeriSuuremasttSonast() {
  this.tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
}

sorteeriKolmasTahtAZ() {
  this.tootajad.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
}

calculateAverageAge() {
  let totalAge = 0;
  this.tootajad.forEach(tootaja => totalAge += tootaja.vanus);
  return (totalAge / this.tootajad.length).toFixed(2);}
}

