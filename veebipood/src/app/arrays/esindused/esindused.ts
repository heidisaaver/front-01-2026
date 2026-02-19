import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../../services/esindus';
import { Esindus } from '../../models/Esindus';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-esindused',
  imports: [RouterLink],
  templateUrl: './esindused.html',
  styleUrl: './esindused.css',
})
export class Esindused implements OnInit {
 linn = "Tallinn";
 keskused: Esindus[] = [];

 constructor(private esindusService: EsindusService) {}

  ngOnInit() {
  this.keskused = this.esindusService.esindused;

}

arvutaKokku() {
  let summa = 0;
  this.keskused.forEach(keskus => summa = summa + keskus.nimi.length);
  return summa;
}

}
