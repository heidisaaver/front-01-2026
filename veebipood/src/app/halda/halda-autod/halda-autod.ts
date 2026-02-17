import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto';
import { Auto } from '../../models/Auto';

@Component({
  selector: 'app-halda-autod',
  imports: [],
  templateUrl: './halda-autod.html',
  styleUrl: './halda-autod.css',
})
export class HaldaAutod implements OnInit {
  autod: Auto[] = [];

  constructor(private autoService: AutoService) {}

  ngOnInit() {
  this.autod = this.autoService.autod;

  }

  kustuta(index: number) {
    this.autod.splice(index, 1);

  }
}
