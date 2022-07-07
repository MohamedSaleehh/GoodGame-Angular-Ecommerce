import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './guards/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './pages/auth/auth.module';
import { HomeModule } from './pages/home/home.module';
import { ShopModule } from './pages/shop/shop.module';
import { StaticModule } from './pages/static/static.module';

import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent, AuthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    HomeModule,
    ShopModule,
    StaticModule,
    DataViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
