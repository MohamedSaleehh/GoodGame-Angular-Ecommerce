import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id: any;
  products: Array<any> = [];
  prod = new BehaviorSubject(this.products);
  cartCounter=new BehaviorSubject(this.products.length);
  total: any = 0;

  addProduct(prod: Product) {
    let flag: boolean = false;
    this.products.forEach((e: any) => {
      console.log('ok');
      if (e._id == prod._id) {
        e.quantity++;
        flag = true;
      }
    });
    if (!this.products.length || !flag) {
      Object.assign(prod, { quantity: 1 });
      this.products.push(prod);
      this.prod.next(this.products);
      console.log(prod);
      this.getTotalPrice();
      console.log(this.products);
      this.prod.next(this.products);
      this.cartCounter.next(this.products.length)
    }
  }
  getTotalPrice(): number {
    this.total = 0;
    this.products.forEach((e: any) => {
      this.total += e.quantity * e.price;
    });
    return this.total;
    this.prod.next(this.products);
    this.cartCounter.next(this.products.length)
  }
  getProduct():Observable<Array<Product>> {
    return this.prod.asObservable();
  }
  removeProduct(id: number): void {
    this.products.forEach((e) => {
      if (e._id == id) {
        const index = this.products.indexOf(e);
        this.products.splice(index, 1);
      }
      this.prod.next(this.products);
      this.cartCounter.next(this.products.length)
    });
  }
  getCounter(): Observable<number>  {
    return this.cartCounter;
  }
  // cart: Array<Product> = []
  // cartBehavior = new BehaviorSubject(this.cart)
  // CartLen = new BehaviorSubject(0)
  // counter:number = 0

  // constructor() { }

  // get getCart(): Observable<Array<Product>> {
  //   return this.cartBehavior
  // }
  // get cartLen(): Observable<number> {
  //   return this.CartLen
  // }
  // addtocart(product: Product) {
  //   let flag:boolean = false
  //   this.cart.forEach(element => {
  //   if(element._id == product._id){
  //     element.amount++
  //     flag = true
  //   }
  // });
  //   if(this.cart.length == 0 || !flag){
  //     Object.assign(product,{amount:1})
  //     this.cart.push(product)
  //     this.cartBehavior.next(this.cart)
  //     this.CartLen.next(this.cart.length)
  //   }
  //   this.CartLen.next(++this.counter)
  // }
  // removeall(id:Product){
  //   this.cart.forEach(element => {
  //     if(element._id == id){
  //       this.cart.splice(element._id,1)
  //       this.CartLen.next( this.counter-=element.amount )
  //     }
  //   })
  // }
  // removeelem(id:Product){
  //   this.cart.forEach(element => {
  //     if(element._id == id){
  //       element.amount--
  //       if(element.amount == 0){
  //       this.removeall(id)
  //       }
  //     }

  //   });
  //   this.CartLen.next(--this.counter)
  // }

}
