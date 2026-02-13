import { Component } from '@angular/core';
import { Toode } from '../../services/toode';

@Component({
  selector: 'app-tooted',
  imports: [],
  templateUrl: './tooted.html',
  styleUrl: './tooted.css',
})
export class Tooted {

   tooted: string[] = [];

   constructor(private toodeService: Toode) {}

   ngOnInit() {
    this.tooted = this.toodeService.tooted;
   }

   reset() {
    this.tooted = this.toodeService.tooted;
   }



sorteeriAZ() {
  this.tooted.sort((a, b) => a.localeCompare(b));
}

sorteeriZA() {

  this.tooted.sort((a, b) => b.localeCompare(a));

}

sorteeriVaiksemastSonast() {
  this.tooted.sort((a, b) => a.length - b.length);
}

sorteeriSuuremasttSonast() {
  this.tooted.sort((a, b) => b.length - a.length);
}

sorteeriKolmasTahtAZ() {
  this.tooted.sort((a, b) => a[2].localeCompare(b[2]));
}
}
