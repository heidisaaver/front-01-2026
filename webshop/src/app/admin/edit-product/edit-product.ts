import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
// import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css',
})
export class EditProduct {
  categories: Category[] = [];
  product!: Product;
  id!: number;
  productUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/Products";
  private categoryUrl = "https://69a54208885dcb6bd6a7ca89.mockapi.io/categories";

  private cdr = inject(ChangeDetectorRef);
  constructor(private route: ActivatedRoute,
    // private productService: ProductService,
    private router: Router
  ) {}


    //andmebaasist peab ID alusel võtma:
  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
  //   const foundProducts = this.productService.products[this.index];  
  //   if (foundProducts) {
  //     this.product = {...foundProducts}; //koopia tegemine  
  //   } 
  //   this.product = foundProducts!;
    fetch(this.productUrl + "/" + this.id)
      .then(res => res.json())
      .then(json => {
        this.product = json;
        this.cdr.detectChanges();
      }) 

    fetch(this.categoryUrl)
      .then(res => res.json())
     .then(json => {
        this.categories = json;
         this.cdr.detectChanges();
    });
    }

  change() {
    if (this.product.title.trim() === "") {
      alert("Title can't be empty!");  //kontroll
      return;
    } 
    // this.productService.products[this.index] = this.product;
     

    

    fetch(this.productUrl + "/" + this.product.id, {
        method: "PUT",  //muudab PUT, POST lisab juurde
        body: JSON.stringify(this.product),
        headers: {
          "Content-Type": "application/json"
         }
       }).then (() => {
        this.router.navigateByUrl("/manage-products"); //suunamine tagasi
       })    

      }
}

