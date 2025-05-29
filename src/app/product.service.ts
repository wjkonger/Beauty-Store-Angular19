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
    return this.RetrieveDataByAPI(this.apiUrl);   
  }

  SearchProducts(term: string)
  {
     return this.RetrieveDataByAPI(this.apiUrl + "/search?q=" + term);   
  }

  GetProduct(id: string)
  {
    return this.RetrieveDataByAPI(this.apiUrl + "/" + id);    
  }

  private RetrieveDataByAPI(url: string)
  {
     return this.oHttpClient.get(url);
  }
}
