import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/static/about-us/about-us.component';
import { PrivacyComponent } from './pages/static/privacy/privacy.component';
import { ProductComponent } from './pages/shop/product/product.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
