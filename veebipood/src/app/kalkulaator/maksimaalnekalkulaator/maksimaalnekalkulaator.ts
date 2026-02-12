import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maksimaalnekalkulaator',
  imports: [FormsModule],
  templateUrl: './maksimaalnekalkulaator.html',
  styleUrl: './maksimaalnekalkulaator.css',
})
export class Maksimaalnekalkulaator {
  taotleja = "1";
  perekonnaseis = 1;
  ylalpeetavad = 1;
  netosissetulek =  900;
  kohustused = 0;
  maksimaalnelimiit = 55790.16;
  // maksimaalnelimiit = this.arvutamaksimaalnelimiit()
  

  arvutaMaksimaalnelimiit () {
    this.maksimaalnelimiit = 30 * (this.netosissetulek - this.kohustused) * (1/(this.ylalpeetavad + 0.8)) / Number(this.taotleja) * ((this.perekonnaseis + 0.5) / 0.8);

  }
}
