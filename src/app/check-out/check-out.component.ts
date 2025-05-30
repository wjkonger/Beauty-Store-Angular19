import { Component } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { CartItem } from '../Interfaces/cart-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IOrder } from '../Interfaces/iorder';
import { IAddress } from '../Interfaces/iaddress';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  imports: [CommonModule, FormsModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent {

  cartItems: CartItem[] = [];
  subTotal: number = 0;
  shipping: number = 0;
  tax: number = 0;
  total: number = 0;
  order: IOrder = {};
  shippingAddress: IAddress = {};

  totalPerItem: number = 0;
  value: any;

  constructor(private oShoppingCartService: ShoppingCartService, private oRouter: Router){
    
    this.refreshCheckout();
  }

  refreshCheckout()
  {
    this.cartItems = this.oShoppingCartService.getItems();
    this.subTotal = this.oShoppingCartService.CalculateSubtotal();
    this.shipping = this.subTotal * 0.06;
    this.tax = (this.subTotal + this.shipping) * 0.13;
    this.total = this.subTotal + this.shipping + this.tax;
  }

  PlaceOrder() {
    
    this.order.shippingAddress = this.shippingAddress;
    this.oRouter.navigateByUrl("order-confirmation", );

    this.oRouter.navigate(['order-confirmation'], {
      state: {
        order: this.order  
      }
    });
  }

   provinces = [
    { "key": "AB", "value": "Alberta" },
    { "key": "BC", "value": "British Columbia" },
    { "key": "MB", "value": "Manitoba" },
    { "key": "NB", "value": "New Brunswick" },
    { "key": "NL", "value": "Newfoundland and Labrador" },
    { "key": "NS", "value": "Nova Scotia" },
    { "key": "ON", "value": "Ontario" },
    { "key": "PE", "value": "Prince Edward Island" },
    { "key": "QC", "value": "Quebec" },
    { "key": "SK", "value": "Saskatchewan" },
    { "key": "NT", "value": "Northwest Territories" },
    { "key": "NU", "value": "Nunavut" },
    { "key": "YT", "value": "Yukon" }
  ]

  // states = [
  //   { "key": "AL", "value": "Alabama" },
  //   { "key": "AK", "value": "Alaska" },
  //   { "key": "AZ", "value": "Arizona" },
  //   { "key": "AR", "value": "Arkansas" },
  //   { "key": "CA", "value": "California" },
  //   { "key": "CO", "value": "Colorado" },
  //   { "key": "CT", "value": "Connecticut" },
  //   { "key": "DE", "value": "Delaware" },
  //   { "key": "FL", "value": "Florida" },
  //   { "key": "GA", "value": "Georgia" },
  //   { "key": "HI", "value": "Hawaii" },
  //   { "key": "ID", "value": "Idaho" },
  //   { "key": "IL", "value": "Illinois" },
  //   { "key": "IN", "value": "Indiana" },
  //   { "key": "IA", "value": "Iowa" },
  //   { "key": "KS", "value": "Kansas" },
  //   { "key": "KY", "value": "Kentucky" },
  //   { "key": "LA", "value": "Louisiana" },
  //   { "key": "ME", "value": "Maine" },
  //   { "key": "MD", "value": "Maryland" },
  //   { "key": "MA", "value": "Massachusetts" },
  //   { "key": "MI", "value": "Michigan" },
  //   { "key": "MN", "value": "Minnesota" },
  //   { "key": "MS", "value": "Mississippi" },
  //   { "key": "MO", "value": "Missouri" },
  //   { "key": "MT", "value": "Montana" },
  //   { "key": "NE", "value": "Nebraska" },
  //   { "key": "NV", "value": "Nevada" },
  //   { "key": "NH", "value": "New Hampshire" },
  //   { "key": "NJ", "value": "New Jersey" },
  //   { "key": "NM", "value": "New Mexico" },
  //   { "key": "NY", "value": "New York" },
  //   { "key": "NC", "value": "North Carolina" },
  //   { "key": "ND", "value": "North Dakota" },
  //   { "key": "OH", "value": "Ohio" },
  //   { "key": "OK", "value": "Oklahoma" },
  //   { "key": "OR", "value": "Oregon" },
  //   { "key": "PA", "value": "Pennsylvania" },
  //   { "key": "RI", "value": "Rhode Island" },
  //   { "key": "SC", "value": "South Carolina" },
  //   { "key": "SD", "value": "South Dakota" },
  //   { "key": "TN", "value": "Tennessee" },
  //   { "key": "TX", "value": "Texas" },
  //   { "key": "UT", "value": "Utah" },
  //   { "key": "VT", "value": "Vermont" },
  //   { "key": "VA", "value": "Virginia" },
  //   { "key": "WA", "value": "Washington" },
  //   { "key": "WV", "value": "West Virginia" },
  //   { "key": "WI", "value": "Wisconsin" },
  //   { "key": "WY", "value": "Wyoming" }
  // ]
}
