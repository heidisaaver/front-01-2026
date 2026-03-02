import { Component, OnInit, resource, signal } from '@angular/core';
import { OstukorvService } from '../services/ostukorv.service';
import { Auto } from '../models/Auto';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-ostukorv',
  imports: [],
  templateUrl: './ostukorv.html',
  styleUrl: './ostukorv.css',
})
export class Ostukorv  {
  ostukorv: Auto[] | Toode[] = JSON.parse(localStorage.getItem("ostukorv") || "[]"  );

  country = "EE";

     dataResource = resource ({ 
      loader: () => fetch("https://www.omniva.ee/locations.json").then(res => res.json())  
      
      
      }); 

  // toodeteArv = 4;
  // ostukorviSumma = 123;

  // constructor(private ostukorvService: OstukorvService) {}

  // ngOnInit() {
  //   this.ostukorv = this.ostukorvService.ostukorv;
  // }

  tyhjenda() {
  // this.toodeteArv = 0;
  this.ostukorv = [];
  // this.ostukorviSumma = 0;
  localStorage.setItem("ostukorv", "[]");
}


kustuta(index: number) {
  this.ostukorv.splice(index, 1);
  localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
}

arvutaKokku() {
  let summa = 0;
  // summa = summa + 120000;
  // summa = summa +80000;
  this.ostukorv.forEach(toode => summa = summa + toode.hind);

  return summa;


}



// // 1. This signal acts as our "trigger" and data holder
//   paymentPayload = signal<any>(undefined);

//   postResource = resource({
//     // 2. Resource only runs when paymentPayload() is NOT undefined
//     request: () => this.paymentPayload(),
    
//     loader: async ({ request, abortSignal }) => {
//       // 3. Guard: If no payload, do nothing (don't fetch on load)
//       if (!request) return undefined;

//       const response = await fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff", {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': 'Basic ' + btoa('e36eb40f5ec87fa2:YOUR_SECRET_KEY') // EveryPay usually requires Auth
//         },
//         body: JSON.stringify(request),
//         signal: abortSignal
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.errors?.[0]?.message || 'Post failed');
//       }
//       return response.json();
//     }
//   });

//   // 4. This is what you put in your pay() function
//   pay() {
//     this.paymentPayload.set({
//       "account_name": "EUR3D1",
//       "nonce": crypto.randomUUID(), // Better to generate a real unique string
//       "timestamp": new Date().toISOString(),
//       "amount": this.arvutaKokku(),
//       "order_reference": "order-" + Math.floor(Math.random() * 10000),
//       "customer_url": "https://heidi-01-2026.web.app",
//       "api_username": "e36eb40f5ec87fa2"
//     });
//   }


pay() {
  const url = "https:igw-demo.every-pay.com/api/v4/payments/oneoff"
  const payload =  {
    "account_name": "EUR3D1",
      "nonce": crypto.randomUUID(), // Better to generate a real unique string
      "timestamp": new Date().toISOString(),
      "amount": this.arvutaKokku(),
      "order_reference": "order-" + Math.floor(Math.random() * 10000),
      "customer_url": "https://heidi-01-2026.web.app",
      "api_username": "e36eb40f5ec87fa2"

  }

  fetch (url, {

    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      'Content-Type':'application/json',
      'Authorization': 'Basic ' + btoa('e36eb40f5ec87fa2:7b91a3b9e1b74524c2e9fc282f8ac8cd')
    }


  })

  .then(res => res.json())
  .then(json => window.location.href = json.payment_link);


}


}



  




