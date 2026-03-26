import { ChangeDetectorRef, Component, inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Product } from '../models/product';


@Component({
  selector: 'app-rendiseade',
  imports: [],
  templateUrl: './rendiseade.html',
  styleUrl: './rendiseade.css',
})
export class Rendiseade {

  product!: Product;
  productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"
  private cdr = inject(ChangeDetectorRef);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const product_id = Number(this.route.snapshot.paramMap.get("product_id"));
       fetch(this.productUrl + "/" + product_id)
      .then(res => res.json())
      .then(json => {
        this.product = json;
        this.cdr.detectChanges();
      }) 
  }

}
