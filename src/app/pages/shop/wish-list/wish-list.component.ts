import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from './../../../services/wish-list.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  wishListArr: Array<any> = [];

  constructor(private _CartService: CartService ,private _wishListService :WishListService,private snackBar: MatSnackBar) {
    this._wishListService.getWishListArr().subscribe(data=>{
      this.wishListArr = data
      this._CartService.loadCart();
  })

  }
  showSnackbarTopPosition(content:any, action:any) {
    this.snackBar.open(content, action, {
      duration: 2000,
      panelClass: ["custom-style"],
      verticalPosition: "bottom", // Allowed values are  'top' | 'bottom'
      horizontalPosition: "center" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
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
