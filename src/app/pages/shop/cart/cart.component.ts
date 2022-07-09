import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { ApiService } from 'src/app/services/api.service';
import { map, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // myproducts!:Array<Product>
  wishListId: Array<any> = [];
  wishListArr: Array<any> = [];
  total: number = 0;
  myproducts: Array<Product> = [];
  sub!: Subscription

  // totalPrice: number = 0
  constructor(private _CartService: CartService ,private _wishListService :WishListService,private apiService :ApiService) {

    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
      
    });

    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    this.total = this._CartService.getTotalPrice(); // do not put it inside a subscribe, it causes memory overflow
    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   
    this._wishListService.getWishListArr().subscribe(data=>{
      this.wishListArr = data
  })
  }


  ngOnInit(): void {
  }
  delete(_id: string) {
    this._wishListService.removeFromWishList(_id).subscribe(data=>{
      this.wishListArr = data as Array<Product>
      console.log(data);
      
    });
  }
  remove(id: string) {
    this._CartService.removeProduct(id);
    
    

    this.total = this._CartService.getTotalPrice();
  }
  increaseQuantity(id: string) {
    this._CartService.products.forEach((e: any) => {
      if (e._id == id) {
        e.quantity++;
      }
    });
    // this._counterService.setCount(this.counter + 1);
    this.total = this._CartService.getTotalPrice();
  }
  decreaseQuantity(id: string) {
    this._CartService.products.forEach((e: any) => {
      if (e._id == id) {
        e.quantity--;
        if (e.quantity == 0) {
          this.remove(id);
        }
      }
    });
    // this._counterService.setCount(this.counter - 1);
    this.total = this._CartService.getTotalPrice();
  }

}
