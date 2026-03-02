import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-one-product',
  imports: [],
  templateUrl: './one-product.html',
  styleUrl: './one-product.css',
})
export class OneProduct {

  product!: Product;

  constructor(private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const product_id = Number(this.route.snapshot.paramMap.get("product_id"));
    const foundProduct = this.productService.products.find(product => product.id === product_id);
    this.product = foundProduct!;
  }

}


