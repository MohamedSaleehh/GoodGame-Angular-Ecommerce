import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  term:any;
  constructor(private httpClient :HttpClient) { }

  getProducts() : Observable<any>{
    return this.httpClient.get("https://gg-store.herokuapp.com/products/index")
  }
  getProductById(id : string) {
    return this.httpClient.get(`https://gg-store.herokuapp.com/products/${id}`)
  }


}
