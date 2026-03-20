import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { FormsModule } from '@angular/forms';
import { CartProduct } from '../models/cartProduct';


@Component({
  selector: 'app-rentalproducts',
  imports: [RouterLink, FormsModule],
  templateUrl: './rentalproducts.html',
  styleUrl: './rentalproducts.css',
})
export class Rentalproducts {


  products: Product [] = [];
  dbproducts: Product[] = [];
  categories: Category [] = [];
  private categoryUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";
  private cdr = inject(ChangeDetectorRef);
  private productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"


  ngOnInit() {
  // Võtame tooted teenusest ja algseisus näitame kõiki
  // this.products = this.productService.products;
  // this.filteredProducts = [...this.products]; 

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


  sortAZ() {
    this.products.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortZA() {
    this.products.sort((a, b) => b.title.localeCompare(a.title));
  }

  sortPriceAsc() {}

  sortPriceDesc() {}

  sortRatingAsc() {
    this.products.sort((a,b) => a.rating - b.rating);
  }


  sortRatingDes() {
    this.products.sort((a,b) => b.rating - a.rating);
  }

  
  filterCategory(categoryName: string) {
    this.products = this.dbproducts.filter(product => product.category === categoryName)
  }

   addToCart(clickedProduct: Product) {
    const cartLS: CartProduct [] = JSON.parse(localStorage.getItem ("cart") || "[]"  );
    const found = cartLS.find(cartProduct => cartProduct.product.id === clickedProduct.id); 
    if (found !== undefined) {
      //kui on korvis olemas siis suurenda kogust
      found.quantity++; //found.quantity +=1; või found.quantity = found.quantity + 1; kõik on samaväärsed
    } else {
    cartLS.push({product: clickedProduct, quantity: 1});
    }

    localStorage.setItem("cart", JSON.stringify(cartLS));
  }

  calculateTotal(): number {
    let sum = 0;
    this.products.forEach(product => sum = sum + product.price);
    return sum;
  }

  filterCategoryAed() {
    this.products = this.dbproducts.filter(product => product.category === 'Aed') 
  }

   filterCategoryEhitus() {
    this.products = this.dbproducts.filter(product => product.category === 'Ehitus') 
  }
    filterCategoryElekter() {
    this.products = this.dbproducts.filter(product => product.category === 'Elektritööriistad') 
  }
  filterCategoryKasitoo() {
    this.products = this.dbproducts.filter(product => product.category === 'Käsitööriistad')
  }

  filterCategoryPuhastus() {
    this.products = this.dbproducts.filter(product => product.category === 'Puhastus')
  }
  }
