import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tootaja } from '../../models/Tootaja';
import { ActivatedRoute, Router } from '@angular/router';
import { KasutajaService } from '../../services/kasutaja.service';
import { TootajaService } from '../../services/tootaja.service';

@Component({
  selector: 'app-muuda-tootaja',
  imports: [FormsModule],
  templateUrl: './muuda-tootaja.html',
  styleUrl: './muuda-tootaja.css',
})
export class MuudaTootaja {
 tootaja!: Tootaja;
  index!: number;

  constructor(private route: ActivatedRoute,
    private tootajaService: TootajaService,
    private router: Router
  ) {}


  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitudTootaja = this.tootajaService.tootajad[this.index];  
    if (leitudTootaja) {
      this.tootaja = {...leitudTootaja}; //koopia tegemine  
    } 
    this.tootaja = leitudTootaja!;
  }

  muuda() {
    if (this.tootaja.nimi.trim() === "") {
      alert("Nimi ei saa olla tühi!");  //kontroll
      return;
    } 
    this.tootajaService.tootajad[this.index] = this.tootaja;
     this.router.navigateByUrl("/halda-tootajad"); //suunamine tagasi

}
}
