import { Component, OnInit } from '@angular/core';
import { ToodeService } from '../../services/toode.service';
import { Toode } from '../../models/Toode';


@Component({
  selector: 'app-halda-tooted',
  imports: [],
  templateUrl: './halda-tooted.html',
  styleUrl: './halda-tooted.css',
})
export class HaldaTooted implements OnInit {
  tooted: Toode[] = [];

  constructor(private toodeService: ToodeService) {}

  ngOnInit() {
    this.tooted = this.toodeService.tooted;
  }

  kustuta(index: number) {
    this.tooted.splice(index, 1);
  }

}
