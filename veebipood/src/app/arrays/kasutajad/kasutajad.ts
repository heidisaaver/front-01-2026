import { Component, OnInit } from '@angular/core';
import { Kasutaja } from '../../models/Kasutaja';
import { KasutajaService } from '../../services/kasutaja.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kasutajad',
  imports: [RouterLink],
  templateUrl: './kasutajad.html',
  styleUrl: './kasutajad.css',
})
export class Kasutajad implements OnInit {

    kasutajad: Kasutaja[] = []

    constructor(private kasutajaService: KasutajaService) {}



  ngOnInit() {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  reset() {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  calculateAverageNameLength() {
    let summa = 0;
    this.kasutajad.forEach(kasutaja => summa = summa + kasutaja.nimi.length);
    return Math.round(summa / this.kasutajad.length);
  }

  //sort ja filter
  // keskmine vanus (mitte vanused kokku)
  //teistel näiteks keskmine nime pikkus

}
