import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExploreComponent } from './explore/explore.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    AboutComponent,
    CardComponent,
    CardListComponent,
    CategoriesComponent,
    ExploreComponent,
    TestimonialComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
