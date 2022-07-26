import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  get allOrders(){
    return this.http.get("http://localhost:3000/orders/index")
  }
  singleOrder(order_id:string){
    return this.http.get(`http://localhost:3000/orders/${order_id}`)
  }
}
