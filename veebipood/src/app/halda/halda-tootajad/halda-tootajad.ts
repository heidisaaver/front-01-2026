import { Component, OnInit } from '@angular/core';
import { TootajaService } from '../../services/tootaja.service';
import { Tootaja } from '../../models/Tootaja';


@Component({
  selector: 'app-halda-tootajad',
  imports: [],
  templateUrl: './halda-tootajad.html',
  styleUrl: './halda-tootajad.css',
})
export class HaldaTootajad implements OnInit{
  tootajad: Tootaja[] = []

  constructor(private tootajaService: TootajaService) {}

  ngOnInit() {
    this.tootajad = this.tootajaService.tootajad;
    
  }

  kustuta(index: number) {
    this.tootajad.splice(index, 1);
  }

}
