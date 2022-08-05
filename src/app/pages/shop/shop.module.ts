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
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { EURToEGPPipe } from 'src/app/pipes/eurto-egp.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { SearchFilterPipe } from '../../pipes/search-filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { ComponentsModule } from 'src/app/components/components.module';
import { CatPipePipe } from 'src/app/pipes/cat-pipe.pipe';
@NgModule({
  declarations: [
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FreePipe,
    StockPipe,
    ProductComponent,
    WishListComponent,
    PaymentComponent,
    SafePipe,
    EURToEGPPipe,
    CatPipePipe,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatTabsModule,
    MatPaginatorModule,
    NgbModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    NgbModule,
    FormsModule,
    MatSnackBarModule,
    ComponentsModule,

  ]
})
export class ShopModule { }
