import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../models/category';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';




@Component({
  selector: 'app-add-product',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './add-product.html',
  styleUrls: ['./add-product.css'],
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
  selectedFile: File | null = null;

  ngOnInit() {
    fetch(this.categoryUrl)
    .then(res => res.json())
    .then(json => {
      this.categories = json;
      this.cdr.detectChanges();
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      // See muudab pildi väga pikaks tekstijadaks
      this.image = reader.result as string; 
      console.log("Pilt konverteeritud tekstiks");
      };
    reader.readAsDataURL(file);
    }
  }

  add() {
  // Kontrollid
  if (this.title.length < 3 || this.title.trim() === "") {
    alert("Toote nimi on liiga lühike või tühi!");
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
    };

    fetch(this.productUrl, {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json"
      }
    })
    .then(res => {
    if (res.ok) {
      
    } else {
      alert("Midagi läks valesti!");
      }
      });
  
    this.id = 0;
    this.title = "";
    this.price = 0;
    this.description = "";
    this.category = "";
    this.image = "";
    this.active = false;
    this.selectedFile = null;
      
    alert("Seade on edukalt lisatud!");
  }
}
