import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';
import { WishListService } from './../../../services/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() messageFromChild = new EventEmitter<string>()
  @Input('productData')productData:any;
  @Input() addedTOWishList!: boolean;

  constructor(private _CartService:CartService ,private _wishListService :WishListService) { }

  ngOnInit(): void {
  }

  navigateToDetails(){
    
  }
  // addtocart(product: Product) {
  //   this._CartService.addtocart(product)
  //   console.log(product);

  // }
  addtocart(product: Product) {
    this._CartService.addProduct(product)

  }




  handleAddToWishList(): any {
    this._wishListService.addToWishList(this.productData._id).subscribe();
    
    this.addedTOWishList = true;
  }
  handleRemoveToWishList() {
    // console.log(this._wishListService.removeFromWishList(this.productData.id));
    this._wishListService.removeFromWishList(this.productData._id).subscribe();
    this.addedTOWishList = !this.addedTOWishList;
  }

}
