import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  baseURL = "https://gg-store.herokuapp.com"

  get allOrders(){
    return this.http.get(this.baseURL+"/orders/index")
  }
  singleOrder(order_id:string){
    return this.http.get(this.baseURL+`/orders/${order_id}`)
  }
}
