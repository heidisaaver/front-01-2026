import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto';
import { Auto } from '../../models/Auto';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-halda-autod',
  imports: [RouterLink],
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
