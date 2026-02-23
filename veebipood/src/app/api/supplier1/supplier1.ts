import { HttpClient } from '@angular/common/http';
import { Component, OnInit, resource } from '@angular/core';

@Component({
  selector: 'app-supplier1',
  imports: [],
  templateUrl: './supplier1.html',
  styleUrl: './supplier1.css',
})
export class Supplier1  {

  //https://fakestoreapi.com/products

  // products: any[] = [];

  // constructor(private httpService: HttpClient) {}

  // ngOnInit() {
  //     // fetch("https://fakestoreapi.com/products")
  //     //   .then(res => res.json())
  //     //   .then(json => this.products = json);    => oli eelmises versioonis

  //   this.httpService.get<any[]>("https://fakestoreapi.com/products").subscribe(vastus => {
  //     this.products = vastus; 
  //   });                                            => oli eelmises versioonis
    
    dataResource = resource ({ 
      loader: () => fetch("https://fakestoreapi.com/products").then(res => res.json())  
      
      
      }); 
    

  }


