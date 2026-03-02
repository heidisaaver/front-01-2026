import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-supplier3',
  imports: [],
  templateUrl: './supplier3.html',
  styleUrl: './supplier3.css',
})
export class Supplier3 {
  dataResource = resource ({
    loader: () => fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json())
  });




}
