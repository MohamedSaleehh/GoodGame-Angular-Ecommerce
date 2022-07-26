import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from '../home/home.component';

import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WishListComponent } from './wish-list/wish-list.component';



const routes: Routes = [
  {path:'',redirectTo:'productlist',pathMatch:'full'},
  {path:'productlist',component:ProductListComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  { path: 'wishlist',canActivate:[AuthGuard], component: WishListComponent },
  { path: 'payment',canActivate:[AuthGuard], component: PaymentComponent },
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
