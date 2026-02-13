import { Component } from '@angular/core';
import { Tootaja } from '../../services/tootaja';

@Component({
  selector: 'app-tootajad',
  imports: [],
  templateUrl: './tootajad.html',
  styleUrl: './tootajad.css',
})
export class Tootajad {
  tootajad: string[] = [];

  constructor(private tootajaService: Tootaja) {}

  ngOnInit() {
    this.tootajad = this.tootajaService.tootajad;
  }

  reset() {
    this.tootajad = this.tootajaService.tootajad;
  }



sorteeriAZ() {
  this.tootajad.sort((a, b) => a.localeCompare(b));
}

sorteeriZA() {

  this.tootajad.sort((a, b) => b.localeCompare(a));

}

sorteeriVaiksemastSonast() {
  this.tootajad.sort((a, b) => a.length - b.length);
}

sorteeriSuuremasttSonast() {
  this.tootajad.sort((a, b) => b.length - a.length);
}

sorteeriKolmasTahtAZ() {
  this.tootajad.sort((a, b) => a[2].localeCompare(b[2]));
}
}

