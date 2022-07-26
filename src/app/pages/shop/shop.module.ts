import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { FreePipe } from 'src/app/pipes/free.pipe';
import { StockPipe } from 'src/app/pipes/stock.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import { WishListComponent } from './wish-list/wish-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FreePipe,
    StockPipe,
    ProductComponent,
    WishListComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    NgbModule,
    NgbModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class ShopModule { }
