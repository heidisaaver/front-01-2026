import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avaleht',
  imports: [FormsModule],
  templateUrl: './avaleht.html',
  styleUrl: './avaleht.css',
})
export class Avaleht {
  laigitud = true;

  summa = 0;
  number1 = 0;
  number2 = 0;

}
