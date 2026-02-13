import { Component, OnInit } from '@angular/core';
import { Auto } from '../../services/auto';

@Component({
  selector: 'app-halda-autod',
  imports: [],
  templateUrl: './halda-autod.html',
  styleUrl: './halda-autod.css',
})
export class HaldaAutod implements OnInit {
  autod: string[] = [];

  constructor(private autoService: Auto) {}

  ngOnInit() {
  this.autod = this.autoService.autod;

  }

  kustuta(index: number) {
    this.autod.splice(index, 1);

  }
}
