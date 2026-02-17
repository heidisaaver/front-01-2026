import { Component, OnInit } from '@angular/core';
import { EsindusService } from '../../services/esindus';
import { Esindus } from '../../models/Esindus';

@Component({
  selector: 'app-halda-esindused',
  imports: [],
  templateUrl: './halda-esindused.html',
  styleUrl: './halda-esindused.css',
})
export class HaldaEsindused implements OnInit {
  esindused: Esindus[] = [];

  constructor(private esindusService: EsindusService) {}

  ngOnInit() {
    this.esindused = this.esindusService.esindused;
  }

  kustuta( index: number) {
    this.esindused.splice(index, 1);


  }



}
