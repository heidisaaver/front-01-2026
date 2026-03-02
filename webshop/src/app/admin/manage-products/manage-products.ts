import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-products',
  imports: [RouterLink, FormsModule],
  templateUrl: './manage-products.html',
  styleUrl: './manage-products.css',
})
export class ManageProducts {

  products: Product[] = []
  // allProducts: Product[] = [];
  searchTerm: string = '';


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.products;
    //  this.products = this.allProducts;
    
  }

  delete(index: number) {
    this.products.splice(index, 1);
  }


  search() {
  this.products = this.products.filter(products =>
    products.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

}





