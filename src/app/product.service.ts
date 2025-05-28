import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl : string = "";

  constructor(private oHttpClient : HttpClient) 
  {
    this.apiUrl = environment.apiUrl;
  }

  GetListOfProduct()
  {
    return this.oHttpClient.get(this.apiUrl);
  }

  GetProduct(id: string)
  {
     return this.oHttpClient.get(this.apiUrl + "/" + id);
  }
}
