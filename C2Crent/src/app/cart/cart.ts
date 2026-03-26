import { Component, resource } from '@angular/core';
import { CartProduct } from '../models/cartProduct';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [MatFormFieldModule,
           MatDatepickerModule,
           MatInputModule,
           MatNativeDateModule,
           FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  rentStart: Date | null = null;
  rentEnd: Date | null = null; 
  cart: CartProduct[]  = JSON.parse(localStorage.getItem("cart") || "[]"  );
  country = "EE";

  dataResource = resource ({ 
    loader: () => fetch("https://www.omniva.ee/locations.json").then(res => res.json())       
    }); 

    empty() {
  // this.toodeteArv = 0;
  this.cart = [];
  // this.ostukorviSumma = 0;
  localStorage.setItem("cart", "[]");
  }

 decreaseQuantity(index: number) {
    this.cart[index].quantity--;
    if(this.cart[index].quantity === 0) {
      this.delete(index);
    }
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }



  increaseQuantity(index: number) {
    this.cart[index].quantity++;
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  get rentalDays(): number {
  if (!this.rentStart || !this.rentEnd) return 0;

  // ööpäevade vahe; +1 kui tahad lugeda mõlemad päevad sisse (vali sobiv loogika)
  const start = new Date(this.rentStart);
  const end = new Date(this.rentEnd);

  // normaliseeri keskööle, et vältida DST jamasid
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  const ms = end.getTime() - start.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1; // inclusive
  return Math.max(days, 0);
  }




  delete(index: number) {
  this.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // calculateTotal() {
  // let sum = 0;
  // this.cart.forEach(cp => sum = sum + cp.product.price * cp.quantity * this.rentalDays);
  // return sum;
  // }

  calculateTotal(): number {
  const base = this.cart.reduce((sum, cp) => sum + (cp.product.price * cp.quantity), 0);
  // kui periood pole valitud, siis kas 0 päeva või 1 päev (vali, mis UX sobib)
  const days = this.rentalDays || 1;
  return base * days;
  }



  pay() {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff"
    const payload =  {
        "account_name": "EUR3D1",
        "nonce": crypto.randomUUID(), // Better to generate a real unique string
        "timestamp": new Date().toISOString(),
        "amount": this.calculateTotal(),
       "order_reference": "order-" + Math.floor(Math.random() * 10000),
       "customer_url": "https://webshop-5698.web.app/",
       "api_username": "e36eb40f5ec87fa2"
    }

    fetch (url, {

    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type':'application/json',
      'Authorization': 'Basic ' + btoa('e36eb40f5ec87fa2:7b91a3b9e1b74524c2e9fc282f8ac8cd')
    } 
  }) .then(res => res.json())
     .then(json => window.location.href = json.payment_link);
  }

 



}

