import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laenukalkulaator',
  imports: [FormsModule],
  templateUrl: './laenukalkulaator.html',
  styleUrl: './laenukalkulaator.css',
})
export class Laenukalkulaator {
  ostuhind = 75000;
  sissemakse = 0;
  laenusumma = this.ostuhind - this.sissemakse;
  periood = 30;
  marginaal = 1.7;
  euribor = 2.15;
  intress = this.marginaal + this.euribor
  kuumakse = this.arvuta(this.intress);
  kuumakseKorgendatud = this.arvuta(7);
  
  // ngOnChanges() {
  //   this.intress = this.marginaal + this.euribor
  // }
  arvutaKuumakse() {
    this.intress = this.marginaal + this.euribor;
    this.laenusumma = this.ostuhind - this.sissemakse;
    this.kuumakse = this.arvuta(this.intress);
    this.kuumakseKorgendatud = this.arvuta(7);
  }

  private arvuta(arvutusIntress: number) {
    return (this.ostuhind - this.sissemakse) / this.periood / 12 * arvutusIntress / 2.6;

  }
  // private arvuta1() {
  //   return (this.ostuhind - this.sissemakse) / this.periood / 12 * 7 / 2.6;

}
