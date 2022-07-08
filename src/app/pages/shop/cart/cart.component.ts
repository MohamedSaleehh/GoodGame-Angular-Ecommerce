import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs';

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

  // totalPrice: number = 0
  constructor(private _CartService: CartService ,private _wishListService :WishListService,private apiService :ApiService) {
    // this._CartService.getCart.subscribe(e=>{
    //   this.myproducts = e
    //   console.log(this.myproducts,"test")
    // })
    // this.totalprice()
    // this._CartService.getProduct().subscribe((data: any) => {
    //   this.myproducts = data;
    //   this.total = this._CartService.getTotalPrice();
    // });
    // this._wishListService.getWishList().subscribe((res :any) => {
    //   this.wishListArr = res;
    // });
    // this._wishListService.getWishListArr().subscribe((data:any)=>{
    //   this.wishListId = data;
    //   this.wishListId.forEach((e) =>{
    //   const eess = this.apiService.getProductById(e).subscribe((res)=>{
    //     this.wishListArr.push(res)
  
    //   })
    // })
    const ass = this._wishListService.getWishListArr().forEach(data=>{
      console.log(data);
      this.wishListId = data;
      this.wishListId.forEach((e) =>{
        this.apiService.getProductById(e).forEach((res)=>{
          this.wishListArr.push(res)
    
        })
    })
    
  })

  }
  updateWishlist(){
    this.wishListArr=[]
    this.wishListId.forEach((e) =>{
      this.apiService.getProductById(e).forEach((res)=>{
        this.wishListArr.push(res)
  
      })
  })
  }

  ngOnInit(): void {
  }
  delete(_id: string):any {
    this._wishListService.removeFromWishList(_id);
    this.updateWishlist()
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
