import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoundNumberPipe } from "../round-number.pipe";
import { CartItem } from '../Interfaces/cart-item';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RoundNumberPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {


  productId: string = "";
  oProduct: any;
  oCartItem: CartItem = {};

  constructor(private oRoute : ActivatedRoute, private oProductService : ProductService, private oShoppingCartService: ShoppingCartService, private oRouter: Router)
  {
    this.oRoute.paramMap.subscribe(params => {
      this.productId = params.get('id') as string;
    });
  }

  ngOnInit(): void {
    this.oProductService.GetProduct(this.productId).subscribe(response=>{
       this.oProduct = response;
    })
  }

  AddCartItem(oProduct: any) {
    this.InsertCartItem(oProduct);
    this.oRouter.navigateByUrl("shopping-cart");
  }

  BuyItNow(oProduct: any) {
    this.InsertCartItem(oProduct);
    this.oShoppingCartService.callMethod();
    this.oRouter.navigateByUrl("check-out");
  }

  private InsertCartItem(oProduct: any)
  {
    this.oCartItem.id = oProduct.id;
    this.oCartItem.name = oProduct.title;
    this.oCartItem.description = oProduct.description;
    this.oCartItem.price = oProduct.price;
    this.oCartItem.quantity = 1;
    this.oCartItem.image = oProduct.thumbnail;
    
    this.oShoppingCartService.addItem(this.oCartItem);
  }

}
