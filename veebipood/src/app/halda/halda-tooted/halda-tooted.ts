import { Component, OnInit } from '@angular/core';
import { Toode } from '../../services/toode';

@Component({
  selector: 'app-halda-tooted',
  imports: [],
  templateUrl: './halda-tooted.html',
  styleUrl: './halda-tooted.css',
})
export class HaldaTooted implements OnInit {
  tooted: string[] = [];

  constructor(private toodeService: Toode) {}

  ngOnInit() {
    this.tooted = this.toodeService.tooted;
  }

  kustuta(index: number) {
    this.tooted.splice(index, 1);
  }

}
