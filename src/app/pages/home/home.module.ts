import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    CardComponent,
    CardListComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, HomeRoutingModule,MatTabsModule],
})

export class HomeModule {}
