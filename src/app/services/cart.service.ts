import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id: any;
  products: Array<any> = [];
  prodBehavior = new BehaviorSubject(this.products);
  cartCounter=new BehaviorSubject(this.products.length);
  total: any = 0;

  addProduct(prod: Product) {
    let flag: boolean = false;
    this.products.forEach((e: any) => {
      if (e._id == prod._id) {
        e.amount++;
        flag = true;
      }
    });
    if (!this.products.length || !flag) {
      Object.assign(prod, { amount: 1 });
      this.products.push(prod);
      this.prodBehavior.next(this.products);
      console.log(prod);
      this.getTotalPrice();
      console.log(this.products);
      this.prodBehavior.next(this.products);
      this.cartCounter.next(this.products.length)
    }
  }
  getTotalPrice(): number {
    this.total = 0;
    this.products.forEach((e: any) => {
      this.total += e.amount * e.price;
    });
    this.prodBehavior.next(this.products);
    this.cartCounter.next(this.products.length)
    return this.total;
   
  }
  getProduct():Observable<Array<Product>> {
    return this.prodBehavior.asObservable();
  }
  removeProduct(id: string): void {
    this.products.forEach((e) => {
      if (e._id == id) {
        const index = this.products.indexOf(e);
        this.products.splice(index, 1);
      }
      this.prodBehavior.next(this.products);
      this.cartCounter.next(this.products.length)
    });
  }
  getCounter(): Observable<number>  {
    return this.cartCounter;
  }

}
