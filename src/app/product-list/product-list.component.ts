import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { RoundNumberPipe } from "../round-number.pipe";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule, RoundNumberPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {

 listOfProducts : any;
 term: string = "";
 apiData: any;

  constructor(private oProductService : ProductService, private oRouter : Router, private oRoute : ActivatedRoute)
  {
      this.oRoute.paramMap.subscribe(params => {
        this.term = params.get('term') as string;
      });
  }

  ngOnInit(): void {
    if (this.term && this.term.trim().length > 0)
    {
       this.oProductService.SearchProducts(this.term.trim()).subscribe(response=>{
        this.listOfProducts = response;      
      })
    }
    else
    {
      this.oProductService.GetListOfProduct().subscribe(response=>{
        this.listOfProducts = response;      
      })
    }
 
  }

  ViewProductDetail(id: number) {
      this.oRouter.navigateByUrl("product-detail/" + id);
  }

}
