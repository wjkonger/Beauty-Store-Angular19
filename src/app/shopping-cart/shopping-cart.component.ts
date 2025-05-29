import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems = [
    {
      name: 'Product 1',
      description: 'High-quality beauty product',
      price: 29.99,
      quantity: 1,
      image: 'assets/product1.jpg'
    },
    {
      name: 'Product 2',
      description: 'Another great product',
      price: 49.99,
      quantity: 2,
      image: 'assets/product2.jpg'
    }
  ];

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  get total(): number {
    return this.subtotal; // Add tax/shipping if needed
  }

  increaseQty(item: any) {
    item.quantity++;
  }

  decreaseQty(item: any) {
    if (item.quantity > 1) item.quantity--;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

}
