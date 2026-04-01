import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('C2Crent');

  cartService = inject(CartService);
  isLoggedIn!: boolean;
  // constructor(private authService: AuthService) {}

  private authService = inject(AuthService); //töötab samuti nagu ülemine väljakommenteeritud, inject ei tööta vanades (alla 16.) versioonides
  private router = inject(Router);

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(loggedInNewValue =>
      this.isLoggedIn = loggedInNewValue
    );
  } //.subscribe kuulab .next vajutusi

  logout() {
    this.authService.isLoggedIn.next(false);
    this.router.navigateByUrl("/");
    sessionStorage.removeItem("token");
  }
  get cartTotal(): number {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  return cart.reduce((sum: number, cp: any) => sum + (cp.product.price * cp.quantity), 0);
  }
}
