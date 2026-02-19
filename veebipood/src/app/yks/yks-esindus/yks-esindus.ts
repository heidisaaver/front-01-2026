import { Component } from '@angular/core';
import { Esindus } from '../../models/Esindus';
import { ActivatedRoute } from '@angular/router';
import { EsindusService } from '../../services/esindus';

@Component({
  selector: 'app-yks-esindus',
  imports: [],
  templateUrl: './yks-esindus.html',
  styleUrl: './yks-esindus.css',
})
export class YksEsindus {

  esindus!: Esindus

  constructor(private route: ActivatedRoute,
    private esindusService: EsindusService
  ) {}
  ngOnInit() {
    const esindus_nimi = this.route.snapshot.paramMap.get("esinduse_nimi");
    const leitudEsindus = this.esindusService.esindused.find(esindus => esindus.nimi === esindus_nimi);
    this.esindus = leitudEsindus!;

}
}
