import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishListService{

  counter: number = 0
  counterBehaviour = new BehaviorSubject(this.counter);
  constructor(private http: HttpClient) {
    
  }



  getWishListArr(): Observable<any> {
    return this.http.get('https://gg-store.herokuapp.com/wishlist/index');
    }

  addToWishList(Id: string){
    return this.http.post(`https://gg-store.herokuapp.com/wishlist/add/${Id}`,{}).subscribe()
  }
  removeFromWishList(productId: string) {
    return this.http.delete(`https://gg-store.herokuapp.com/wishlist/remove/${productId}`)
  }



}
