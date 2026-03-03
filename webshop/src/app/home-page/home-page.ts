import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Category } from '../models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  filteredProducts: any[] = [];
  products: Product[] = [];
  category = "";

  categories: Category [] = [];
  private url = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";
  private cdr = inject(ChangeDetectorRef);

  constructor(private productService: ProductService,
      private cartService: CartService
    ) {}
  

  ngOnInit() {
  // Võtame tooted teenusest ja algseisus näitame kõiki
  this.products = this.productService.products;
  this.filteredProducts = [...this.products]; 

  fetch(this.url)
    .then(res => res.json())
    .then(json => {
      this.categories = json;
      this.cdr.detectChanges();
    });
}

// filterCategory() {
//   if (this.category === "") {
//     this.filteredProducts = [...this.products]; // Kui valikut pole, näita kõiki
//   } else {
//     // Filtreerime tooteid, mitte kategooriaid!
//     this.filteredProducts = this.products.filter(p => p.category === this.category);
//   }
// }

  reset() {
      this.products = this.productService.products;
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
    this.products.sort((a,b) => a.rating.rate - b.rating.rate);
  }


  sortRatingDes() {
    this.products.sort((a,b) => b.rating.rate - a.rating.rate);
  }


  filterCategoryMensCl() {
    this.products = this.products.filter(product => product.category === "men's clothing" )
  }


  filterCategoryJewelery() {
    this.products = this.products.filter(product => product.category === "jewelery" )
  }


  filterCategoryElectronics() {
    this.products = this.products.filter(product => product.category === "electronics" )
  }

  filterCategoryWomensCl() {
    this.products = this.products.filter(product => product.category === "women's clothing" )
  }



   addToCart(products: Product) {
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


