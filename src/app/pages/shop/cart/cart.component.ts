import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  total: number = 0;
  myproducts: Array<Product> = [];

  constructor(private _CartService: CartService,private snackBar: MatSnackBar) {
    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
    });
    this._CartService.getTotalPrice().subscribe((total)=>{
      this.total = total
    });

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
