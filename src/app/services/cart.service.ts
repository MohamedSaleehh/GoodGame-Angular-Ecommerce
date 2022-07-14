import {  Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  id: any;
  products: Array<any> = [];
  productTest: Array<any> =[]
  prodBehavior = new BehaviorSubject(this.products);
  cartCounter=new BehaviorSubject(0);
  total=new BehaviorSubject(0);
  prod!:Product;

  addProduct(prod: Product) {
    this.products=this.getProducts()
    let flag: boolean = false;
    this.products.forEach((e: any) => {
      if (e._id == prod._id) {
        e.amount++;
        flag = true;
        this.saveCart();
        this.prodBehavior.next(this.products);
        this.getCounter()
      }
    });
    if (!this.products.length || !flag) {
      Object.assign(prod, { amount: 1 });
      this.products.push(prod);
      this.getTotalPrice();
      this.saveCart();
      this.prodBehavior.next(this.products);
      this.getCounter()
    }
  }
  getTotalPrice() {
    let totalPrice=0;
    this.products=this.getProducts();
    this.products?.forEach((e: any) => {
      totalPrice += e.amount * e.price;
      console.log(totalPrice);
    });
    this.total.next(totalPrice);
    this.prodBehavior.next(this.products);
    return this.total;
  }
  getProduct():Observable<Array<Product>> {
    return this.prodBehavior;
  }
  removeProduct(id: string): void {
    this.products=this.getProducts()
    this.products?.forEach((e) => {
      if (e._id == id) {
        const index = this.products.indexOf(e);
        this.products.splice(index, 1);
      }
      this.prodBehavior.next(this.products)
    })
    this.saveCart();
    this.getCounter()
  }
  getProducts(){
    if(typeof this.products === 'string'){
      return JSON.parse(this.products);
    }
    else{
      return this.products;
    }
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.products))
  }
  loadCart(): void{
    if((localStorage.getItem("cart_items")) !== null){
    this.products = JSON.parse(JSON.stringify(localStorage.getItem("cart_items"))) ?? []
    this.getTotalPrice();
  }
  }
  increaseQuantity(id: string) {
    this.products=this.getProducts()
    this.products?.forEach((e: any) => {
      if (e._id == id) {
        e.amount++;
      }
      this.prodBehavior.next(this.products);
    });
      this.getTotalPrice();
      this.saveCart()
      this.getCounter()
  }
  decreaseQuantity(id: string) {
    this.products=this.getProducts()
    this.products?.forEach((e: any) => {
      if (e._id == id) {
        e.amount--;
        if (e.amount == 0) {
          this.removeProduct(id);
        }
      }
      this.prodBehavior.next(this.products);
    });
    this.getTotalPrice();
    this.saveCart()
    this.getCounter()
  }
  getCounter(): Observable<number> {
    this.loadCart()
    this.products=this.getProducts();
    let amount =0;
    let counter =0;
    console.log(this.products);
    this.prodBehavior.next(this.products);
    this.products?.forEach((e: any) => {
      amount += e.amount
    });
    this.cartCounter.next(amount);
    console.log(amount);
    return this.cartCounter;
  }

}
