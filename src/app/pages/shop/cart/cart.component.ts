import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  myproducts!:Array<Product>
  totalPrice: number = 0
  constructor(private _CartService: CartService) {
    this._CartService.getCart.subscribe(e=>{
      this.myproducts = e
      console.log(this.myproducts,"test")
    })
    this.totalprice()
   }

  ngOnInit(): void {
  }
  increment(product:Product){
    this._CartService.addtocart(product)
  }  
  decrement(_id:Product){
    this._CartService.removeelem(_id)
  }
  removeall(_id:Product){
    this._CartService.removeall(_id)
  }
  totalprice(){
    this.myproducts.forEach((element) => {

      this.totalPrice = this.totalPrice + (element.price * element.amount)
      console.log("totalPrice",this.totalPrice);
      console.log("price",element.price);
      console.log("amount",element.amount);
      
    });
  }
}
