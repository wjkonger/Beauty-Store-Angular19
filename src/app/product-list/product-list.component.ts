import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { RoundNumberPipe } from "../round-number.pipe";
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule, RoundNumberPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

 listOfProducts : any;
 apiData: any;

  constructor(private oProductService : ProductService, private oRouter : Router)
  {
      
  }

  ngOnInit(): void {
    this.oProductService.GetListOfProduct().subscribe(response=>{

      this.listOfProducts = response;
      
    })
  }

  ViewProductDetail(id: number) {
      this.oRouter.navigateByUrl("product-detail/" + id);
  }

}
