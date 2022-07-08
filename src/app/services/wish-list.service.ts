import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzQ5YWQwZTk4YTVkYTJmYjA2N2U3ZSIsInVzZXJuYW1lIjoiYXNkZGYiLCJpYXQiOjE2NTcwNTE4NTZ9.XJF6tjL5s0gGaSfzfz1-w4S_Z3P5NUiALLyOrPn-bpo";
  wishList: Product[] = [];
  wishListBehaviorSubject = new BehaviorSubject(this.wishList);
  counter = new BehaviorSubject(this.wishList.length);
  constructor(private http: HttpClient) {}
  getWishListArr(): Observable<any> {
    
    return this.http.get('https://gg-store.herokuapp.com/wishlist/index',{headers:{
      token : this.auth_token
    }});
    }

  addToWishList(Id: string){
    console.log(Id);
    this.http.post(`https://gg-store.herokuapp.com/wishlist/add/${Id}`,{},{headers:{token:this.auth_token}})
  }
  removeFromWishList(productId: number) {
    // return this.http.delete(`url/${productId}`)
    this.wishList.forEach((e, index) => {
      if (e._id == productId) {
        const index = this.wishList.indexOf(e);
        this.wishList.splice(index, 1);
      }
      this.wishListBehaviorSubject.next(this.wishList);
      this.counter.next(this.wishList.length);
    });
  }
  getWishList(): Observable<Array<Product>>  {
    return this.wishListBehaviorSubject;
  }
  getCounter(): Observable<number>  {
    return this.counter;
  }

}
