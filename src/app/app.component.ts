import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numOfCartItem: number = 0

  constructor(private oShoppingCartService: ShoppingCartService)
  {
    this.numOfCartItem = oShoppingCartService.CountCartItem();
  }

  title = 'Beauty Store';
}
