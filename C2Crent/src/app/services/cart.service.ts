import { Injectable, signal, computed } from '@angular/core';
import { CartProduct } from '../models/cartProduct';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _cart = signal<CartProduct[]>(this.readCart());

  cart = this._cart.asReadonly();

  total = computed(() => {
    const cart = this._cart();
    return cart.reduce((sum, cp) => sum + cp.product.price * cp.quantity, 0);
  });

  private readCart(): CartProduct[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  private writeCart(cart: CartProduct[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this._cart.set(cart);
  }

  refreshFromStorage() {
    this._cart.set(this.readCart());
  }

  clear() {
    this.writeCart([]);
  }

  add(product: any) {
    const cart = this.readCart();
    const found = cart.find(cp => cp.product.id === product.id);
    if (found) found.quantity++;
    else cart.push({ product, quantity: 1 });
    this.writeCart(cart);
  }
  setCart(cart: CartProduct[]) {
  this.writeCart(cart);
    }
}