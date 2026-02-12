import { Component } from '@angular/core';

@Component({
  selector: 'app-tootajad',
  imports: [],
  templateUrl: './tootajad.html',
  styleUrl: './tootajad.css',
})
export class Tootajad {
  tootajad = ["Marten Kask", "Liis Tamm", "Andres Saar", "Katrin Lepp", "Rasmus Põld", "Maarja Mägi", "Kristjan Vaher", "Anu Järv", "Taavi Oja", "Helena Kuusk"];




sorteeriAZ() {
  this.tootajad.sort((a, b) => a.localeCompare(b));
}

sorteeriZA() {

  this.tootajad.sort((a, b) => b.localeCompare(a));

}

sorteeriVaiksemastSonast() {
  this.tootajad.sort((a, b) => a.length - b.length);
}

sorteeriSuuremasttSonast() {
  this.tootajad.sort((a, b) => b.length - a.length);
}

sorteeriKolmasTahtAZ() {
  this.tootajad.sort((a, b) => a[2].localeCompare(b[2]));
}
}

