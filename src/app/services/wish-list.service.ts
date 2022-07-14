import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzlhYzFkYzU0YjFiZTRjMGQ3YzY1NiIsInVzZXJuYW1lIjoiS2hhbGllZCIsInJvbGUiOnsicm9sZSI6IkFkbWluIiwiY29kZSI6Mn0sImlhdCI6MTY1NzM4Mzk2Nn0.EDxbkYdPO2PDXXrJ4lRgDJ-O-81f-yu8G4zXvFZx2ho";
  wishList: Product[] = [];
  wishListBehaviorSubject = new BehaviorSubject(this.wishList);
  counter = new BehaviorSubject(this.wishList.length);
  constructor(private http: HttpClient) {}
  // setNewCount(count : number){
  //   this.counter.next(count)
  // }
  // getWishListCounter(){
  //   return this.counter.asObservable()
  // }
  // getWishListCounter(): Observable<number>  {
  //   return this.counter;
  // }
  getWishListArr(): Observable<any> {
    return this.http.get('https://gg-store.herokuapp.com/wishlist/index',{headers:{
      token : this.auth_token
    }});
    }
    // getWishListLength(): Observable<any> {
    //   return this.http.get('https://gg-store.herokuapp.com/wishlist/index',{headers:{
    //     token : this.auth_token
    //   }});
    //   }

  addToWishList(Id: string){
    return this.http.post(`https://gg-store.herokuapp.com/wishlist/add/${Id}`,{},{headers:{token:this.auth_token}})
  }
  removeFromWishList(productId: string) {
    return this.http.delete(`https://gg-store.herokuapp.com/wishlist/remove/${productId}`,{headers:{token:this.auth_token}})
  }
  getWishList(): Observable<Array<Product>>  {
    return this.wishListBehaviorSubject;
  }


}
