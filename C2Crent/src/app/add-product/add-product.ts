import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {

 
  message = "Lisa oma seade renti:";
  id = 0;
  title = "";
  price = 0;
  description = "";
  category = "";
  image = "";
  active = false;
  categories: Category [] = [];
  private categoryUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";
  private cdr = inject(ChangeDetectorRef);
  private productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products"


  ngOnInit() {
    fetch(this.categoryUrl)
    .then(res => res.json())
    .then(json => {
      this.categories = json;
      this.cdr.detectChanges();
    });

  }

  add() {
    
    if (this.title.length < 3) {
      alert("Product title too short!");
      return;
    } 
  
    
    if (this.title.trim() === "") {
      alert( "Can't enter with emty name!");
      return;

    }
  
    const newProduct = {
      "title": this.title,
      "image": this.image,
      "price": this.price,  
      "description": this.description,
      "category": this.category,
      "rating": 0,
      "active": this.active,
      "count": 0,
      "id": this.id,
   
    }

    fetch(this.productUrl, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json"
        }
    })

    this.id = 0;
    this.title = "";
    this.price = 0;
    this.description = "";
    this.category = "";
    this.image = "";

  }
}
