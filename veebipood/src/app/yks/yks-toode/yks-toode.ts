import { Component } from '@angular/core';
import { Toode } from '../../models/Toode';
import { ActivatedRoute } from '@angular/router';
import { ToodeService } from '../../services/toode.service';

@Component({
  selector: 'app-yks-toode',
  imports: [],
  templateUrl: './yks-toode.html',
  styleUrl: './yks-toode.css',
})
export class YksToode {
  toode!: Toode;

  constructor(private route: ActivatedRoute,
    private toodeService: ToodeService
  ) {}

  ngOnInit() {
    const toode_nimi = this.route.snapshot.paramMap.get("toode_nimi");
    const leitudToode = this.toodeService.tooted.find(toode => toode.nimi === toode_nimi);
    this.toode = leitudToode!;
  }

}
