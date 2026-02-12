import { Component } from '@angular/core';

@Component({
  selector: 'app-hinnad',
  imports: [],
  templateUrl: './hinnad.html',
  styleUrl: './hinnad.css',
})
export class Hinnad {
  hinnad = [312,551,12,8,23,6,541,5,52,76,3,98]



sorteeriVaiksemast() {
  this.hinnad.sort((a, b) => a - b);
}

sorteeriSuuremast() {
  this.hinnad.sort((a, b) => b - a);
}
 

}
