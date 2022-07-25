import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  errorMessage: string = ''
  pay = this.fb.group(
    {
      email: ["", [Validators.required, Validators.pattern(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)]],
    }
  );
  card = this.fb.group(
    {
      firstName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      lastName: ["", [Validators.required, Validators.pattern(/\w*/)]],
      Address: ["", [Validators.required]],
      country: ["", [Validators.required]],
      city: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.pattern(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)]],
      username: ["", [Validators.required, Validators.pattern(/^(?=.{4,20}$)(?![0-9])(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)]],
      cardname: ["", [Validators.required, Validators.pattern(/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)]],
      mobile: ["", [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    }
  );
  promo = this.fb.group(
    {
      promo: ["", [Validators.pattern(/(?<=\s|^)[A-Z0-9]{2,}(?=\s|$)/)]],
    }
  );

  total: number = 0;
  myproducts: Array<Product> = [];
  arrproducts: any = []
  url = 'https://gg-store.herokuapp.com/orders/create'
  constructor(private _CartService: CartService, private fb: FormBuilder, private _HttpClient: HttpClient) {


    this._CartService.getProduct().subscribe((data: any) => {
      this.myproducts = data;
    });
    this._CartService.getTotalPrice().subscribe((total) => {
      this.total = total
    });
    for (let e of this.myproducts) {
      this.arrproducts.push({ product: e, amount: e.amount })
    }
  }

  ngOnInit(): void {
    this._CartService.loadCart();
    this.myproducts = this._CartService.getProducts();
  }
  order() {
    this._HttpClient.post(this.url, { products: this.arrproducts, total_price: this.total }).subscribe()
    localStorage.removeItem('cart_items')

  }
}
