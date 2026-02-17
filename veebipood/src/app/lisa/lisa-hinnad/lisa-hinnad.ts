import { Component } from '@angular/core';
import { HindService } from '../../services/hind';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-hinnad',
  imports: [FormsModule],
  templateUrl: './lisa-hinnad.html',
  styleUrl: './lisa-hinnad.css',
})
export class LisaHinnad {

  arv = 0;
  sonana = "";

  constructor(private hindService: HindService) {}

  lisa() {
    
    if (this.arv <=0) {
      alert("Ei saa negatiivset hinda lisada");
      return;
    }


    this.hindService.hinnad.push({
      "arv": this.arv, 
      "sonana": this.sonana}
    );
  

    this.arv = 0;
    this.sonana = "";
    
}

}
