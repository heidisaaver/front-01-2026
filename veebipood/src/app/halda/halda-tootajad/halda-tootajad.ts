import { Component, OnInit } from '@angular/core';
import { TootajaService } from '../../services/tootaja.service';
import { Tootaja } from '../../models/Tootaja';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-halda-tootajad',
  imports: [RouterLink],
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
