import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {

  product!: Product;
  index!: number;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router

  ) {}


  ngOnInit() {
    this.index = Number(this.route.snapshot.paramMap.get("index"));
    const foundProducts = this.productService.products[this.index];  
    if (foundProducts) {
      this.product = {...foundProducts}; //koopia tegemine  
    } 
    this.product = foundProducts!;
  }

  change() {
    if (this.product.title.trim() === "") {
      alert("Title can't be empty!");  //kontroll
      return;
    } 
    this.productService.products[this.index] = this.product;
     this.router.navigateByUrl("/manage-products"); //suunamine tagasi

}
}

