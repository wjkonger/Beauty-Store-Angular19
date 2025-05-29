import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShoppingCartService } from './shopping-cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  numOfCartItem: number = 0;
  searchTerm: string = "";

  constructor(private oShoppingCartService: ShoppingCartService, private oRouter : Router)
  {
    this.numOfCartItem = oShoppingCartService.CountCartItem();
  }

  title = 'Beauty Store';

  Search(term: string) {
    let path: string = "product-list";

    
    if (term && term.trim().length > 0)
    {
      path += "/" + term.trim();
    }  

    this.oRouter.navigateByUrl(path);
  }
}
