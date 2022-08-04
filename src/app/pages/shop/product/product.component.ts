import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { WishListService } from './../../../services/wish-list.service';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  wishListCounter : number =0;
  @Output() messageFromChild = new EventEmitter<string>()
  @Input('productData')productData!:any;
  addedTOWishList!: boolean;
  loggedIn:boolean=false;


  ngOnInit(): void {
  }



  constructor(
      private _CartService:CartService ,
      private _wishListService :WishListService,
      private authService:AuthService,
      private snackBar: MatSnackBar) {
        this.authService.loggedIn.subscribe(data=>{
          this.loggedIn = data
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

  addtocart(product: Product) {
    this._CartService.addProduct(product)
  }
  handleAddToWishList(): any {
    this._wishListService.addToWishList(this.productData._id)
    this.addedTOWishList = true;
  }
  handleRemoveToWishList():any {
    this._wishListService.removeFromWishList(this.productData._id)
    this.addedTOWishList = false;
  }

}
