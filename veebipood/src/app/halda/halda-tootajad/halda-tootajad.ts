import { Component, OnInit } from '@angular/core';
import { Tootaja } from '../../services/tootaja';

@Component({
  selector: 'app-halda-tootajad',
  imports: [],
  templateUrl: './halda-tootajad.html',
  styleUrl: './halda-tootajad.css',
})
export class HaldaTootajad implements OnInit{
  tootajad: string[] = []

  constructor(private tootajaService: Tootaja) {}

  ngOnInit() {
    this.tootajad = this.tootajaService.tootajad;
    
  }

  kustuta(index: number) {
    this.tootajad.splice(index, 1);
  }

}
