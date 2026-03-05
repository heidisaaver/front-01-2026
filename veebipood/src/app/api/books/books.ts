import { Component, effect, resource, signal } from '@angular/core';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {
  page = signal(1);


dataResource = resource({
  loader: async () => {
    const pageNumber = this.page(); 
    console.log("Laen lehte:", pageNumber);

    const res = await fetch(
      `https://api.itbook.store/1.0/search/angular/${pageNumber}`
    );

    return res.json();
  }
});






// page = signal(1);
// data = signal<any>(null);

// constructor() {
//   effect(() => {
//     const pageNumber = this.page();

//     fetch(`https://api.itbook.store/1.0/search/angular/${pageNumber}`)
//       .then(res => res.json())
//       .then(data => this.data.set(data));
//   });
// }
}
