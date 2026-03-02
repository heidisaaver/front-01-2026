import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {


  message = "You can add products here:";
  id = 0;
  title = "";
  price = 0;
  description = "";
  category = "";
  image = "";
  

  constructor(private productService: ProductService) {}

  add() {
    
    if (this.title.length < 3) {
      alert("Product title too short!");
      return;
    } 
  
    
    if (this.title.trim() === "") {
      alert( "Can't enter with emty name!");
      return;
  //   } else {
  //   this.sonum = "Lisatud toode: " + this.nimi;
  // }

  

}
  this.productService.products.push({
    
    "id": this.id,
    "title": this.title,
    "price": this.price,
    "description": this.description,
    "category": this.category,
    "image": this.image,
  });

  this.id = 0;
  this.title = "";
  this.price = 0;
  this.description = "";
  this.category = "";
  this.image = "";;

  // this.sonum = "Lisatud toode: " + this.nimi
}
}
