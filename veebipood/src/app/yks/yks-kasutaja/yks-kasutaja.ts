import { Component } from '@angular/core';
import { Kasutaja } from '../../models/Kasutaja';
import { ActivatedRoute } from '@angular/router';
import { KasutajaService } from '../../services/kasutaja.service';

@Component({
  selector: 'app-yks-kasutaja',
  imports: [],
  templateUrl: './yks-kasutaja.html',
  styleUrl: './yks-kasutaja.css',
})
export class YksKasutaja {
  kasutaja!: Kasutaja;

  constructor (private route: ActivatedRoute,
    private kasutajaService: KasutajaService
  ) {}

  ngOnInit() {
    const kasutaja_nimi = this.route.snapshot.paramMap.get("kasutaja_nimi");
    const leitudKasutaja = this.kasutajaService.kasutajad.find(kasutaja => kasutaja.nimi === kasutaja_nimi);
    this.kasutaja = leitudKasutaja!;
  }
}
