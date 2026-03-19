import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Category } from '../../models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-categories',
  imports: [FormsModule],
  templateUrl: './admin-categories.html',
  styleUrl: './admin-categories.css',
})
export class AdminCategories {
categories: Category[] = [];
  loading = true;
  name = "";
  avatar = "";

  private url = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories"
  private cdr = inject(ChangeDetectorRef);

 ngOnInit() {
  fetch(this.url)
    .then(res => res.json())
    .then(json => {
        this.categories = json;
        this.loading = false;
        this.cdr.detectChanges();
    });

 }
  
 addCategory() {
  fetch(this.url, {
    method: "POST",
    body: JSON.stringify({"name": this.name, "avatar": this.avatar}),
    headers: {
      "Content-Type": "application/json"
    }
   }).then(res => res.json())
    .then(json => {
      this.categories.push(json);
      this.name = "";
      this.avatar = "";
      this.cdr.detectChanges();
    })

  }
    
 deleteCategory(categoryId: string, index: number) {
    fetch(this.url + "/" + categoryId, {
      method: "DELETE"
    })
    this.categories.splice(index,1);
    this.cdr.detectChanges();
  }
}
