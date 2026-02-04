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
  
}
