import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-supplier3',
  imports: [],
  templateUrl: './supplier3.html',
  styleUrl: './supplier3.css',
})
export class Supplier3 {
  dataResource = resource ({
    loader: () => fetch("").then(res => res.json())
  });


}
