import { Component } from '@angular/core';
import { Hind } from '../../models/Hind';
import { ActivatedRoute } from '@angular/router';
import { HindService } from '../../services/hind';

@Component({
  selector: 'app-yks-hind',
  imports: [],
  templateUrl: './yks-hind.html',
  styleUrl: './yks-hind.css',
})
export class YksHind {
  hind!: Hind;


  constructor(private route: ActivatedRoute,
    private hindService: HindService
  ) {}
  ngOnInit() {
    const index = this.route.snapshot.paramMap.get("index");
    const leitudHind = this.hindService.hinnad[Number(index)];
    this.hind = leitudHind!;
    // const esimene [0] = 0, teine [1] = 1, kolmas [2] = 2
    // route -> urlile ligipääs
    // snapshot -> seis urlis
    // paramMap -> kõik väärtused urlis
    // get -> selle mida otsin

  }
   

}
