import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { WishListComponent } from './wish-list/wish-list.component';



const routes: Routes = [
  {path:'',redirectTo:'productlist',pathMatch:'full'},
  {path:'productlist',component:ProductListComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent},
  { path: 'cart', component: CartComponent },
  // { path: 'wishlist', component: WishListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
