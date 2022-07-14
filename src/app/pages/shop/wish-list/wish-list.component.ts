import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { map, Subscriber, Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishListId: Array<any> = [];
  wishListLength! :number;
  wishListArr: Array<any> = [];
  total: number = 0;
  myproducts: Array<Product> = [];
  sub!: Subscription;
  prod!:Product ;

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
  addFromWishToCart(product: Product) {
    this._CartService.addProduct(product)
    this.total = this._CartService.getTotalPrice();
  }
}
