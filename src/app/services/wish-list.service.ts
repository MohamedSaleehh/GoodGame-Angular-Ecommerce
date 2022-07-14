import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishList: Product[] = [];
  wishListBehaviorSubject = new BehaviorSubject(this.wishList);
  counter = new BehaviorSubject(this.wishList.length);
  constructor(private http: HttpClient) {}

  getWishListArr(): Observable<any> {
    return this.http.get('https://gg-store.herokuapp.com/wishlist/index');
    }

  addToWishList(Id: string){
    return this.http.post(`https://gg-store.herokuapp.com/wishlist/add/${Id}`,{})
  }
  removeFromWishList(productId: string) {
    return this.http.delete(`https://gg-store.herokuapp.com/wishlist/remove/${productId}`)
  }
  getWishList(): Observable<Array<Product>>  {
    return this.wishListBehaviorSubject;
  }


}
