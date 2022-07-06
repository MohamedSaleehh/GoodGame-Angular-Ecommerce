import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { FreePipe } from 'src/app/pipes/free.pipe';
import { StockPipe } from 'src/app/pipes/stock.pipe';



@NgModule({
  declarations: [
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductComponent,
    FreePipe,
    StockPipe

    
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ]
})
export class ShopModule { }
