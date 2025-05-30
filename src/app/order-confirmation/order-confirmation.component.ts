import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../Interfaces/cart-item';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';
import { IOrder } from '../Interfaces/iorder';

@Component({
  selector: 'app-order-confirmation',
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit {

  cartItems: CartItem[] = [];
  subTotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;
  order: IOrder = {};

  constructor(private oShoppingCartService: ShoppingCartService, private oRouter: Router)
  {
    this.refreshCheckout();
  }

  ngOnInit(): void {
    const state = history.state;

   

    if (!state.order) {
      this.oRouter.navigateByUrl("check-out");
      return;
    }

    this.order = state.order;
    console.log(this.order);
  }

  refreshCheckout()
  {
    this.cartItems = this.oShoppingCartService.getItems();
    this.subTotal = this.oShoppingCartService.CalculateSubtotal();
    this.shipping = this.subTotal * 0.06;
    this.tax = (this.subTotal + this.shipping) * 0.13;
    this.total = this.subTotal + this.shipping + this.tax;
  }

  ContinueShopping() {
    this.oShoppingCartService.clearCart();
    this.oShoppingCartService.callMethod();
    
    this.oRouter.navigateByUrl("product-list");
  }
}
