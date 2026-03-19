import { Component, resource } from '@angular/core';
import { CartProduct } from '../models/cartProduct';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {


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





  delete(index: number) {
  this.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  calculateTotal() {
  let sum = 0;
  // summa = summa + 120000;
  // summa = summa +80000;
  this.cart.forEach(cp => sum = sum + cp.product.price * cp.quantity);

  return sum;
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

