import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tagasiside',
  imports: [FormsModule],
  templateUrl: './tagasiside.html',
  styleUrl: './tagasiside.css',
})
export class Tagasiside {

  uusTagasiside: string = '';

  lisaTagasiside(uus: string) {
    if (uus.trim() !== '') {
      this.tagasisided.push(uus);
      this.uusTagasiside = '';
    }
   
  }

  tagasisided: string[] = ["Oli hea", "Huvitav", "Teistsugune", "Põnev"];

}
