import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: number = 0;
  myproducts: Array<Product> = [];

  constructor(private _CartService: CartService) {
    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
    });
    this._CartService.getTotalPrice().subscribe((total)=>{
      this.total = total
    });

  }
  ngOnInit(): void {
    this._CartService.loadCart();
    this.myproducts = this._CartService.getProducts();
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
