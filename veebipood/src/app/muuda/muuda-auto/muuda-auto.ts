import { Component } from '@angular/core';
import { Auto } from '../../models/Auto';
import { ActivatedRoute, Router, } from '@angular/router';
import { AutoService } from '../../services/auto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-muuda-auto',
  imports: [FormsModule, ],
  templateUrl: './muuda-auto.html',
  styleUrl: './muuda-auto.css',
})
export class MuudaAuto {
  auto!: Auto;  
  index!: number;

  constructor(private route: ActivatedRoute,
    private router: Router, //suunamine URLis
    private autoService: AutoService
  ) {}   
 


  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index")); 

    const leitudAutod = this.autoService.autod[this.index];
   
    if (leitudAutod) {
      this.auto ={...leitudAutod}; 

}
  }

muuda() {

  if (this.auto.nimi.trim() === "" ) {
    alert("Tühja nimega ei saa sisestada");
    return;

  }
if (this.auto.hind <= 0) {
  alert("hind ei saa olla negatiivne!");
  return;
}
this.autoService.autod[this.index] = this.auto;
this.router.navigateByUrl("/halda-autod");
}


}
