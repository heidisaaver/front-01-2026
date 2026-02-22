import { Component } from '@angular/core';
import { Tootaja } from '../../models/Tootaja';
import { TootajaService } from '../../services/tootaja.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-yks-tootaja',
  imports: [],
  templateUrl: './yks-tootaja.html',
  styleUrl: './yks-tootaja.css',
})
export class YksTootaja {
  tootaja!: Tootaja;

  constructor( private route: ActivatedRoute,
    private tootajaService: TootajaService
  ) {}

  ngOnInit() {
    const tootaja_nimi = this.route.snapshot.paramMap.get("tootaja_nimi");
    const leitudTootaja = this.tootajaService.tootajad.find(tootaja => tootaja.nimi === tootaja_nimi);
    this.tootaja = leitudTootaja!;
  }


}
