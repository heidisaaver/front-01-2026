import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Toode } from '../../models/Toode';
import { ToodeService } from '../../services/toode.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  imports: [FormsModule],
  templateUrl: './muuda-toode.html',
  styleUrl: './muuda-toode.css',
})
export class MuudaToode {
 toode!: Toode;
  index!: number;

  constructor(private route: ActivatedRoute,
    private toodeService: ToodeService,
    private router: Router

  ) {}


  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitudToode = this.toodeService.tooted[this.index];  
    if (leitudToode) {
      this.toode = {...leitudToode}; //koopia tegemine  
    } 
    this.toode = leitudToode!;
  }

  muuda() {
    if (this.toode.nimi.trim() === "") {
      alert("Nimi ei saa olla tühi!");  //kontroll
      return;
    } 
    this.toodeService.tooted[this.index] = this.toode;
     this.router.navigateByUrl("/halda-tooted"); //suunamine tagasi

}
}
