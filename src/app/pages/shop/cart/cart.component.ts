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
  wishListId: Array<any> = [];
  wishListLength! :number;
  wishListArr: Array<any> = [];
  total: number = 0;
  myproducts: Array<Product> = [];
  sub!: Subscription;
  prod!:Product ;

  constructor(private _CartService: CartService
    ,private _wishListService :WishListService
    ,private apiService :ApiService) {
    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
    });
    this._CartService.getTotalPrice().subscribe((total)=>{
      this.total = total
    });
    this._wishListService.getWishListArr().subscribe(data=>{
      this.wishListArr = data
      this._CartService.loadCart();
  })
  }
  ngOnInit(): void {
    this._CartService.loadCart();
    this.myproducts = this._CartService.getProducts();
  }
  delete(_id: string) {
    this._wishListService.removeFromWishList(_id).subscribe(data=>{
      this.wishListArr = data as Array<Product>
    });
  }
  addFromWishToCart(product: Product) {
    this._CartService.addProduct(product)
  }
  remove(id: string) {
    this._CartService.removeProduct(id);
    this._CartService.loadCart()
  }
  increaseQuantity(id: string) {
    this._CartService.increaseQuantity(id)
  }
  decreaseQuantity(id: string) {
    this._CartService.decreaseQuantity(id)
  }

}
