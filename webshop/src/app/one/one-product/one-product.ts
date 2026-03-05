import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
// import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-one-product',
  imports: [],
  templateUrl: './one-product.html',
  styleUrl: './one-product.css',
})
export class OneProduct {

  product!: Product;
  productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"
  private cdr = inject(ChangeDetectorRef);

  constructor(private route: ActivatedRoute,
    // private productService: ProductService
  ) {}

  ngOnInit() {
    const product_id = Number(this.route.snapshot.paramMap.get("product_id"));
    // const foundProduct = this.productService.products.find(product => product.id === product_id);
    // this.product = foundProduct!;
      fetch(this.productUrl + "/" + product_id)
      .then(res => res.json())
      .then(json => {
        this.product = json;
        this.cdr.detectChanges();
      }) 
  }

}


