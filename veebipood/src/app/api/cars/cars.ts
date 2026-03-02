import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class Cars {


dataResource = resource ({ 
      loader: () => fetch("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/Toyota?format=json").then(res => res.json())  
      
      
      }); 

}
