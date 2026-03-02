import { Component } from '@angular/core';
import { ToodeService } from '../../services/toode.service';
import { Toode } from '../../models/Toode';
import { OstukorvService } from '../../services/ostukorv.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tooted',
  imports: [RouterLink],
  templateUrl: './tooted.html',
  styleUrl: './tooted.css',
})
export class Tooted {

   tooted: Toode[] = [];

   constructor(private toodeService: ToodeService,
    private ostukorvService: OstukorvService

   ) {}

   ngOnInit() {
    this.tooted = this.toodeService.tooted;
   }

   reset() {
    this.tooted = this.toodeService.tooted;
   }



sorteeriAZ() {
  this.tooted.sort((a, b) => a.nimi.localeCompare(b.nimi));
}

sorteeriZA() {

  this.tooted.sort((a, b) => b.nimi.localeCompare(a.nimi));

}

sorteeriVaiksemastSonast() {
  this.tooted.sort((a, b) => a.nimi.length - b.nimi.length);
}

sorteeriSuuremasttSonast() {
  this.tooted.sort((a, b) => b.nimi.length - a.nimi.length);
}

sorteeriKolmasTahtAZ() {
  this.tooted.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2]));
}

lisaOstukorvi(toode: Toode) {
  // this.ostukorvService.ostukorv.push(toode);

  const ostukorvLS: Toode [] = JSON.parse(localStorage.getItem ("ostukorv") || "[]"  );
  ostukorvLS.push(toode);

  localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));




}


arvutaKokku(): number {
  let sum = 0;
  this.tooted.forEach(toode => sum = sum + toode.hind);
  return sum;
}
}

//lisa ostukorvi tooteid localStorage'isse
