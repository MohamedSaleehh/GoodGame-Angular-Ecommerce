import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { ApiService } from 'src/app/services/api.service';

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
    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
      this.total = this._CartService.getTotalPrice();
    });
    // this._wishListService.getWishList().subscribe((res :any) => {
    //   this.wishListArr = res;
    // });
    this._wishListService.getWishListArr().subscribe((data:any)=>{
      this.wishListId = data[0].products;
      console.log( this.wishListId);
      this.wishListId.forEach((e) =>{
        this.apiService.getProductById(e).subscribe((res)=>{
        this.wishListArr.push(res)
        console.log(res,"wish");


      })
    }
    )
    })

    console.log(this.wishListArr)
  }

  ngOnInit(): void {
  }
  delete(_id: number):any {
    this._wishListService.removeFromWishList(_id);
  }
  remove(id: number) {
    this._CartService.removeProduct(id);

    this.total = this._CartService.getTotalPrice();
  }
  increaseQuantity(id: number) {
    this._CartService.products.forEach((e: any) => {
      if (e._id == id) {
        e.quantity++;
      }
    });
    // this._counterService.setCount(this.counter + 1);
    this.total = this._CartService.getTotalPrice();
  }
  decreaseQuantity(id: number) {
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
  // increment(product:Product){
  //   this._CartService.addtocart(product)
  // }
  // decrement(_id:Product){
  //   this._CartService.removeelem(_id)
  // }
  // removeall(_id:Product){
  //   this._CartService.removeall(_id)
  // }
  // totalprice(){
  //   this.myproducts.forEach((element) => {

  //     this.totalPrice = this.totalPrice + (element.price * element.amount)
  //     console.log("totalPrice",this.totalPrice);
  //     console.log("price",element.price);
  //     console.log("amount",element.amount);

  //   });
  // }
}
