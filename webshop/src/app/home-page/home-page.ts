import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {


  

   products: Product[] = [];

   constructor(private productService: ProductService,
    private cartService: CartService

   ) {}

   ngOnInit() {
    this.products = this.productService.products;
   }

   reset() {
    this.products = this.productService.products;
   }



sortAZ() {
  this.products.sort((a, b) => a.title.localeCompare(b.title));
}

sortZA() {

  this.products.sort((a, b) => b.title.localeCompare(a.title));

}

sortShorterWord() {
  this.products.sort((a, b) => a.title.length - b.title.length);
}

sortLongerWord() {
  this.products.sort((a, b) => b.title.length - a.title.length);
}

sortThirdLetterAZ() {
  this.products.sort((a, b) => a.title[2].localeCompare(b.title[2]));
}


filterCategory() {

  this.products = this.products.filter(product => product.category === "men's clothing" )
}


// filtreeriTeineTahtonO() {

//  this.autod = this.autod.filter(auto => auto.nimi[1] === "o");
// }




addToCart(products: Product) {
  // this.ostukorvService.ostukorv.push(toode);

  const cartLS: Product [] = JSON.parse(localStorage.getItem ("cart") || "[]"  );
  cartLS.push(products);

  localStorage.setItem("cart", JSON.stringify(cartLS));


}


calculateTotal(): number {
  let sum = 0;
  this.products.forEach(product => sum = sum + product.price);
  return sum;
}
}


