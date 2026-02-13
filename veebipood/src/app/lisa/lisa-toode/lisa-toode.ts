import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lisa-toode',
  imports: [FormsModule],
  templateUrl: './lisa-toode.html',
  styleUrl: './lisa-toode.css',
})
export class LisaToode {
  sonum = "Lisa toode!";
  nimi = "";

  lisa() {
    if (this.nimi.trim() === "") {
      this.sonum = "Tühja nimega ei saa toodet lisada!"
    } else {
    this.sonum = "Toode lisatud: " + this.nimi;
  }

}
}