import { Component } from '@angular/core';
import { Hind } from '../../services/hind';

@Component({
  selector: 'app-hinnad',
  imports: [],
  templateUrl: './hinnad.html',
  styleUrl: './hinnad.css',
})
export class Hinnad {
  hinnad: number[] = [];

  constructor (private hindService: Hind) {}

  ngOnInit() {
    this.hinnad = this.hindService.hinnad;
  }
  
  reset() {
    this.hinnad = this.hindService.hinnad;
  }


sorteeriVaiksemast() {
  this.hinnad.sort((a, b) => a - b);
}

sorteeriSuuremast() {
  this.hinnad.sort((a, b) => b - a);
}
 

filtreeriVaiksemadKui10() {
  this.hinnad = this.hinnad.filter ( hind => hind < 10 );

}


filtreeriSuuremadKui100() {
  this.hinnad = this.hinnad.filter( hind => hind > 100 )

}


}
