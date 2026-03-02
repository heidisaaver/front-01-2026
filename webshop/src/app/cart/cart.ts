import { Component, resource } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {


 cart: Product[]  = JSON.parse(localStorage.getItem("cart") || "[]"  );

  country = "EE";

     dataResource = resource ({ 
      loader: () => fetch("https://www.omniva.ee/locations.json").then(res => res.json())  
      
      
      }); 

  // toodeteArv = 4;
  // ostukorviSumma = 123;

  // constructor(private ostukorvService: OstukorvService) {}

  // ngOnInit() {
  //   this.ostukorv = this.ostukorvService.ostukorv;
  // }

  empty() {
  // this.toodeteArv = 0;
  this.cart = [];
  // this.ostukorviSumma = 0;
  localStorage.setItem("cart", "[]");
}


delete(index: number) {
  this.cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(this.cart));
}

calculateTotal() {
  let sum = 0;
  // summa = summa + 120000;
  // summa = summa +80000;
  this.cart.forEach(product => sum = sum + product.price);

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


  })

  .then(res => res.json())
  .then(json => window.location.href = json.payment_link);


}
}
