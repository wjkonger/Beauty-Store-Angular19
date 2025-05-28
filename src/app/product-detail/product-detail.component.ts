import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RoundNumberPipe } from "../round-number.pipe";

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RoundNumberPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  productId: string = "";
  oProduct: any;

  constructor(private oRoute : ActivatedRoute, private oProductService : ProductService)
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

}
