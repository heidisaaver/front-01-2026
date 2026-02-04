import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lisa-uudis',
  imports: [FormsModule],
  templateUrl: './lisa-uudis.html',
  styleUrl: './lisa-uudis.css',
})
export class LisaUudis {
  uudis = "";

  salvesta() {
    
    if (this.uudis.length < 5) {
      alert("Uudis ei tohi olla vähem kui 5 tähemärki");
      return; 
  } 

    alert("Uudis sisestatud") 

}
}
