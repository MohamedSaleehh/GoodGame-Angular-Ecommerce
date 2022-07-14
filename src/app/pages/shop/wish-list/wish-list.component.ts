import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishListArr: Array<any> = [];

  constructor(private _CartService: CartService ,private _wishListService :WishListService,) {





    this._wishListService.getWishListArr().subscribe(data=>{
      this.wishListArr = data
      this._CartService.loadCart();
  })

  }

  ngOnInit(): void {
  }
  delete(_id: string) {
    this._wishListService.removeFromWishList(_id).subscribe(data=>{
      this.wishListArr = data as Array<Product>
    });
  }
  addFromWishToCart(product: Product) {
    this._CartService.addProduct(product)
  }
}
