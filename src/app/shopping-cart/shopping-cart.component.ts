import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItem } from '../Interfaces/cart-item';
import { ShoppingCartService } from '../shopping-cart.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  cartItems: CartItem[] = [];
  subtotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(private oShoppingCartService: ShoppingCartService)
  {
     this.refreshShoppingCart();
  }

  

  

  increaseQty(item: CartItem) {
    if (item.quantity && item.quantity > 0)
    {
      this.oShoppingCartService.updateQuantity(item, ++item.quantity);
    }

    this.refreshShoppingCart();
    
  }

  decreaseQty(item: CartItem) {
    if (item.quantity && item.quantity > 0)
    {
      this.oShoppingCartService.updateQuantity(item, --item.quantity);
    }

    this.refreshShoppingCart();
    
  }

  refreshShoppingCart()
  {
    this.cartItems = this.oShoppingCartService.getItems();
    this.subtotal = this.oShoppingCartService.CalculateSubtotal();
    this.shipping = this.subtotal * 0.06;
    this.tax = (this.subtotal + this.shipping) * 0.13;
    this.total = this.subtotal + this.shipping + this.tax;
    
    this.oShoppingCartService.callMethod();

  }

  removeItem(item: CartItem) {
    this.oShoppingCartService.removeItem(item);
    this.refreshShoppingCart();
  }
}
