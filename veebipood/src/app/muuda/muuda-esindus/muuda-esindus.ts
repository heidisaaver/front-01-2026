import { Component } from '@angular/core';
import { Esindus } from '../../models/Esindus';
import { ActivatedRoute, Router } from '@angular/router';
import { EsindusService } from '../../services/esindus';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muuda-esindus',
  imports: [FormsModule],
  templateUrl: './muuda-esindus.html',
  styleUrl: './muuda-esindus.css',
})
export class MuudaEsindus {
esindus!: Esindus
index!: number;

  constructor(private route: ActivatedRoute,
    private router: Router, 
    private esindusService: EsindusService
  ) {}
  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitudEsindus = this.esindusService.esindused[this.index];

      if (leitudEsindus) {
        //kolm punkti nimetus on spread operator, tükelda see objekt
        //ja loogelised sulud ümber paneb ta tagasi objektiks
        //miks? siis ta teeb koopia, et me ei muudaks oritinaali  
        //originaal on service sees ja ta muutis mälukoha tõttu
        //kolme punktiga kustutame mälukoha ära  
        this.esindus = {...leitudEsindus};
      }


    this.esindus = leitudEsindus!;

}

muuda() {
    if (this.esindus.nimi.trim() === "" ) {
      alert("Nimi ei tohi tühi olla!");
      return;
    }
   this.esindusService.esindused[this.index] = this.esindus;
   this.router.navigateByUrl("/halda-esindused");
}
}
