import { Component } from '@angular/core';
import { Hind } from '../../services/hind';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-hinnad',
  imports: [FormsModule],
  templateUrl: './lisa-hinnad.html',
  styleUrl: './lisa-hinnad.css',
})
export class LisaHinnad {

  hind = 0;

  constructor(private hindService: Hind) {}

  lisa() {
    
    if (this.hind <=0) {
      alert("Ei saa negatiivset hinda lisada");
      return;
    }


    this.hindService.hinnad.push(this.hind);
  }

}
