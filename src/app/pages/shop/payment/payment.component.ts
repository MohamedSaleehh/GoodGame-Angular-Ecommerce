import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';


import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import { Router } from '@angular/router';

const moment = _rollupMoment || _moment;
export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
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
      cvv: ["", [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]],
      date: ["", [Validators.required, Validators.pattern(/((0[1-9])|(1[0-2]))\/((2022)|(20[1-2][0-9]))$gm/)]],


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
  constructor(private _CartService: CartService, private fb: FormBuilder, private _HttpClient: HttpClient, private router:Router) {


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
    if(this.arrproducts.length){
      this._HttpClient.post(this.url, { products: this.arrproducts, total_price: this.total }).subscribe((order:any)=>{
        localStorage.removeItem('cart_items')
        
        this.router.navigate([`/auth/orders/${order._id}`]);
      })
    }
    
    

  }
  date = new FormControl();
  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  
}
