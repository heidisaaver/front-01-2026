import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kasutaja } from '../../models/Kasutaja';
import { KasutajaService } from '../../services/kasutaja.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muuda-kasutaja',
  imports: [FormsModule],
  templateUrl: './muuda-kasutaja.html',
  styleUrl: './muuda-kasutaja.css',
})
export class MuudaKasutaja {
  kasutaja!: Kasutaja;
  index!: number;

  constructor(private route: ActivatedRoute,
    private kasutajaService: KasutajaService,
    private router: Router

  ) {}


  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitudKasutaja = this.kasutajaService.kasutajad[this.index];  
    if (leitudKasutaja) {
      this.kasutaja = {...leitudKasutaja}; //koopia tegemine  
    } 
    this.kasutaja = leitudKasutaja!;
  }

  muuda() {
    if (this.kasutaja.nimi.trim() === "") {
      alert("Nimi ei saa olla tühi!");  //kontroll
      return;
    } 
    this.kasutajaService.kasutajad[this.index] = this.kasutaja;
     this.router.navigateByUrl("/halda-kasutajad"); //suunamine tagasi

}
}
