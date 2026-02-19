import { Component } from '@angular/core';
import { HindService } from '../../services/hind';
import { Hind } from '../../models/Hind';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-hinnad',
  imports: [RouterLink],
  templateUrl: './hinnad.html',
  styleUrl: './hinnad.css',
})
export class Hinnad {
  hinnad:  Hind [] = [];

  constructor (private hindService: HindService) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad;
  }
  
  reset() {
    this.hinnad = this.hindService.hinnad;
  }


sorteeriVaiksemast() {
  this.hinnad.sort((a, b) => a.arv - b.arv);
}

sorteeriSuuremast() {
  this.hinnad.sort((a, b) => b.arv - a.arv);
}
 

filtreeriVaiksemadKui10() {
  this.hinnad = this.hinnad.filter ( hind => hind.arv < 10 );

}


filtreeriSuuremadKui100() {
  this.hinnad = this.hinnad.filter( hind => hind.arv > 100 )

}

arvutaKokku() {
  let summa = 0;
  this.hinnad.forEach(hind => summa = summa + hind.arv);
  return summa;

}


}
