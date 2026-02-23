import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-supplier2',
  imports: [],
  templateUrl: './supplier2.html',
  styleUrl: './supplier2.css',
})
export class Supplier2 {
  dataResource = resource ({ 
  loader: () => fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json())
});

}
