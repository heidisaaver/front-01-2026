import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-seade',
  imports: [FormsModule],
  templateUrl: './lisa-seade.html',
  styleUrl: './lisa-seade.css',
})
export class LisaSeade {

  message = "Lisa oma toode renti";
  id = 0;
  title = "";
  price = 0;
  description = "";
  category = "";
  image = "";
  active = false;

}
