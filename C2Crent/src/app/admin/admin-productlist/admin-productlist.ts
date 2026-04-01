import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { Category } from '../../models/category';

@Component({
  selector: 'app-admin-productlist',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-productlist.html',
  styleUrl: './admin-productlist.css',
})
export class AdminProductlist {
  categories: Category [] = [];
  products: Product[] = [];
  searchTerm: string = '';
  private dbproducts: Product[] = [];
  private productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"
  private cdr = inject(ChangeDetectorRef);
  private categoryUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";


  ngOnInit() {
    // this.products = this.productService.products;
    //  this.products = this.allProducts;
    fetch(this.productUrl)
      .then(res => res.json())
      .then(json => {
        this.products = json;
        this.dbproducts = json;
        this.cdr.detectChanges();
      })
    
    fetch(this.categoryUrl)
      .then(res => res.json())
      .then(json => {
        this.categories = json;
        this.cdr.detectChanges();
      })
  }

  //index on htmlis kustutamiseks, productid andmebaasist kustutamiseks
  deleteProduct(index: number, productId: number) {
    fetch(this.productUrl + "/" + productId, {method: "DELETE"})
    this.products.splice(index, 1);
    this.cdr.detectChanges();
  }

  search() {
  this.products = this.dbproducts.filter(products =>
    products.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterCategory(categoryName: string) {
    this.products = this.dbproducts.filter(product => product.category === categoryName)
    this.cdr.detectChanges();
  }
}

