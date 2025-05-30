import { Injectable } from '@angular/core';
import { CartItem } from './Interfaces/cart-item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private storageKey = 'shoppingCart';
  private cartItems: CartItem[] = [];
  

  constructor() {
    this.loadCart();
  }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  addItem(item: CartItem): void {
    const existing = this.cartItems.find(i => i.id === item.id);
    if (existing && existing.quantity) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ ...item });
    }
    this.saveCart();
  }

  CalculateSubtotal()
  {    
      this.loadCart();
      
      let subtotal: number = 0;
      
      for(let item of this.cartItems)
      {
        if (item.price && item.quantity)
          subtotal = subtotal + item.price * item.quantity;
      }

      return subtotal;
  }

  CountCartItem()
  {
    this.loadCart();
    
    return this.cartItems.length;
  }

  private methodCallSource = new Subject<void>();
  methodCall$ = this.methodCallSource.asObservable();

  callMethod() {
    this.methodCallSource.next();
  }


  removeItem(item: CartItem): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.saveCart();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    const found = this.cartItems.find(i => i.id === item.id);
    if (found) {
      found.quantity = quantity;
      
      if (found.quantity <= 0) 
        this.removeItem(found);
      else 
        this.saveCart();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCart();
  }

  private saveCart(): void {
    sessionStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
  }

  private loadCart(): void {
    const data = sessionStorage.getItem(this.storageKey);
    this.cartItems = data ? JSON.parse(data) as CartItem[] : [];
  }
}

