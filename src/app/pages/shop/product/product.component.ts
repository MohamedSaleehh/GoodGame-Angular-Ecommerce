import {  Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { WishListService } from './../../../services/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  wishListCounter : number =0;
  @Output() messageFromChild = new EventEmitter<string>()
  @Input('productData')productData!:any;
  @Input() addedTOWishList!: boolean;


  ngOnInit(): void {
  }


    
  constructor(private route:Router,
      private _CartService:CartService ,
      private _wishListService :WishListService) {
      }


  addtocart(product: Product) {
    this._CartService.addProduct(product)
  }
  handleAddToWishList(): any {
    this._wishListService.addToWishList(this.productData._id).subscribe(()=>{
      this.addedTOWishList = true;
    }
    );
  }
  handleRemoveToWishList():any {
    this._wishListService.removeFromWishList(this.productData._id).subscribe(()=>{
      this.addedTOWishList = false;
    });
  }

}
