import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  productId = new BehaviorSubject(0)

  constructor(private httpClient :HttpClient) { }

  getProducts() : Observable<any>{
    return this.httpClient.get("https://gg-store.herokuapp.com/products/index")
  }
  getProductById(id : string) {
    return this.httpClient.get(`https://gg-store.herokuapp.com/products/${id}`)
  }
  setProductId(id: number){
    console.log(id);

    this.productId.next(id)
  }
  getProductId(){
    return this.productId
  }

}
