import { Component } from '@angular/core';
import { Esindus } from '../../models/Esindus';
import { ActivatedRoute, Router } from '@angular/router';
import { HindService } from '../../services/hind';
import { Hind } from '../../models/Hind';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muuda-hind',
  imports: [FormsModule],
  templateUrl: './muuda-hind.html',
  styleUrl: './muuda-hind.css',
})
export class MuudaHind {
  hind!: Hind;
  index!: number;

  constructor(private route: ActivatedRoute,
    private router: Router, //suunamine URLis
    private hindService: HindService
  ) {}
  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const leitudHind = this.hindService.hinnad[this.index];

    if (leitudHind) {
      this.hind = {...leitudHind}; //koopia tegemine  
    }
    this.hind = leitudHind!;

}

muuda() {
  if (this.hind.arv <= 0) {
    alert("Hind ei saa olla negatiivne!");  //kontroll
    return;
  }
   this.hindService.hinnad[this.index] = this.hind;
   this.router.navigateByUrl("/halda-hinnad"); //suunamine tagasi  
}
}
