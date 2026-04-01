import { Component, ChangeDetectorRef, inject, NgModule, ViewChild, ApplicationConfig } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { FormsModule } from '@angular/forms';
import { CartProduct } from '../models/cartProduct';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';


@Component({

  selector: 'app-rentalproducts',
  standalone: true,
  imports: [RouterLink, 
          FormsModule, 
          MatDatepickerModule, 
          MatNativeDateModule, 
          MatInputModule, 
          MatFormFieldModule, 
          MatButtonModule,
          MatIconModule,
          ],
  templateUrl: './rentalproducts.html',
  styleUrl: './rentalproducts.css',
})

export class Rentalproducts {
  
  products: Product [] = [];
  dbproducts: Product[] = [];
  categories: Category [] = [];
  selectedCategory = '';
  searchTerm: string = '';
  rotatingCartIds = new Set<number | string>();
  
  private toastr = inject(ToastrService)
  private categoryUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";
  private cdr = inject(ChangeDetectorRef);
  private productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"

  ngOnInit() {

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

  sortPriceAsc() {
    this.products.sort((a, b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a, b) => b.price - a.price);
  }
  
  filterCategory(categoryName: string) {
    this.products = this.dbproducts.filter(product => product.category === categoryName)
  }

  showAll() {
  this.products = [...this.dbproducts];
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
    this.rotatingCartIds.add(clickedProduct.id);
    setTimeout(() => {
      this.rotatingCartIds.delete(clickedProduct.id);
    }, 500);
    this.toastr.info('Toode lisati ostukorvi!', '', {
    toastClass: 'ngx-toastr toast-info-darkgreen'
    });
  }

  calculateTotal(): number {
    let sum = 0;
    this.products.forEach(product => sum = sum + product.price);
    return sum;
  }

  setCategory(name: string) {
  this.selectedCategory = name;
  }

  clearCategory() {
  this.selectedCategory = '';
  }

  spinLogo(event: MouseEvent) {
  const el = event.target as HTMLElement;
  el.classList.remove('spin-once'); // et järjest klikkides alati uuesti käivituks
  void el.offsetWidth;              // reflow, et animatsioon resetiks
  el.classList.add('spin-once');
  }
}
