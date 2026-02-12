import { Component } from '@angular/core';

@Component({
  selector: 'app-tooted',
  imports: [],
  templateUrl: './tooted.html',
  styleUrl: './tooted.css',
})
export class Tooted {

   tooted = ["Mootoriõli", "Autorehvid", "Piduriklotsid", "Õlifilter", "Akulaadija", "Tuuleklaasipuhastid", "Jahutusvedelik", "Autopesuvaha", "Salongifilter", "Käigukastiõli"];




sorteeriAZ() {
  this.tooted.sort((a, b) => a.localeCompare(b));
}

sorteeriZA() {

  this.tooted.sort((a, b) => b.localeCompare(a));

}

sorteeriVaiksemastSonast() {
  this.tooted.sort((a, b) => a.length - b.length);
}

sorteeriSuuremasttSonast() {
  this.tooted.sort((a, b) => b.length - a.length);
}

sorteeriKolmasTahtAZ() {
  this.tooted.sort((a, b) => a[2].localeCompare(b[2]));
}
}
