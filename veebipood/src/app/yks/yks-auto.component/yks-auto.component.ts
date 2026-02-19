import { Component, OnInit } from '@angular/core';
import { Auto } from '../../models/Auto';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from '../../services/auto';

@Component({
  selector: 'app-yks-auto.component',
  imports: [],
  templateUrl: './yks-auto.component.html',
  styleUrl: './yks-auto.component.css',
})
export class YksAutoComponent implements OnInit{
  auto!: Auto;  //hüüumark, et auto võib olla alguses tühi

  constructor(private route: ActivatedRoute,
    private autoService: AutoService
  ) {}   
  //angulari sisse ehitutatud service, mis võimaldab
  //url-ist muutujaid kätte saada


  ngOnInit() {
    const auto_nimi = this.route.snapshot.paramMap.get("auto_nimi"); //kätte auto_nimi, mis on url-is
    //näiteks http://localhost:4200/auto/VolvoXC90 puhul on auto_nimi = VolvoXC90

    const leitudAutod = this.autoService.autod.find(auto => auto.nimi === auto_nimi);
   //leiab auto nime järgi
   this.auto = leitudAutod!; //hüüumark lõpus paneb kindlasti sinna väärtuse
   //  et leitudAutod ei ole tühi

}
}
