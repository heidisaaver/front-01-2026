import { Component, OnInit } from '@angular/core';
import { Kasutaja } from '../../models/Kasutaja';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-halda-kasutajad',
  imports: [],
  templateUrl: './halda-kasutajad.html',
  styleUrl: './halda-kasutajad.css',
})
export class HaldaKasutajad implements OnInit {

  kasutajad: Kasutaja[] = [];

  constructor(private kasutajaService: KasutajaService) {}


  ngOnInit() {
    this.kasutajad = this.kasutajaService.kasutajad;
  }

  kustuta(index: number) {
    this.kasutajad.splice(index, 1);
  }

}
