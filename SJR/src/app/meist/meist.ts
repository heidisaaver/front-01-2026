import { Component } from '@angular/core';
import { NgClass } from "../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-meist',
  imports: [],
  templateUrl: './meist.html',
  styleUrl: './meist.css',
})
export class Meist {

  message = "Vali mõni tegevus";

  muudaMessage(uusTekst: string) {
    this.message = uusTekst;
  }

}
