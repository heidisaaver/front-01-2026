import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisamine',
  imports: [FormsModule],
  templateUrl: './lisamine.html',
  styleUrl: './lisamine.css',
})
export class Lisamine {
  arvuti = "";
  nupp = true
  sisesta() {
    
    alert(`Arvuti lisatud`);


  }
}
