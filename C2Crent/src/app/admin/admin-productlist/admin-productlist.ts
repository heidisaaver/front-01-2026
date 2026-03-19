import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-productlist',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-productlist.html',
  styleUrl: './admin-productlist.css',
})
export class AdminProductlist {
  products: Product[] = [];
  private dbproducts: Product[] = [];
  // allProducts: Product[] = [];
  searchTerm: string = '';
  url = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"
   private cdr = inject(ChangeDetectorRef);


  // constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.products = this.productService.products;
    //  this.products = this.allProducts;
    fetch(this.url)
      .then(res => res.json())
      .then(json => {
        this.products = json;
        this.dbproducts = json;
        this.cdr.detectChanges();
      })
    
  }

  //index on htmlis kustutamiseks, productid andmebaasist kustutamiseks
  deleteProduct(index: number, productId: number) {
    fetch(this.url + "/" + productId, {method: "DELETE"})
    this.products.splice(index, 1);
  }


  search() {
  this.products = this.dbproducts.filter(products =>
    products.title.toLowerCase().includes(this.searchTerm.toLowerCase())
  );
}

}

