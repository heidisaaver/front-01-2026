import { Component } from '@angular/core';
import { Hind } from '../../services/hind';

@Component({
  selector: 'app-halda-hinnad',
  imports: [],
  templateUrl: './halda-hinnad.html',
  styleUrl: './halda-hinnad.css',
})
export class HaldaHinnad {
  hinnad: number[] = [];

  constructor (private hindService: Hind) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad;
  }


kustutaEsimene() {
  this.hinnad.splice(0, 1);

  }

kustutaTeine() {
  this.hinnad.splice(1, 1);

}

kustutaKolmas() {
  this.hinnad.splice(2, 1);

}

kustuta(index: number) {
  this.hinnad.splice(index, 1);
}

}
