import { Component } from '@angular/core';
import { Auto } from '../../services/auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-autod',
  imports: [FormsModule],
  templateUrl: './lisa-autod.html',
  styleUrl: './lisa-autod.css',
})
export class LisaAutod {
    nimi = ""

  constructor(private autoService: Auto) {}

  lisa() {
   
    if (this.nimi.trim() === "") {
      alert("Tühja nimega ei saa sisestada!");
      return;

    }

      if (this.nimi.includes("%")) {
      alert("Auto nimes ei tohi olla % märk!");
      return;

    }

     if (this.nimi.length < 3) {
      alert("Auto nimi liiga lühike!");
      return;

    }

  
  this.autoService.autod.push(this.nimi);

  }

}


