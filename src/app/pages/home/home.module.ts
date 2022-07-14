import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { AboutComponent } from './about/about.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    SliderComponent,
    HomeComponent,
    CategoriesComponent,
    CardListComponent,
    CardComponent,
    AboutComponent,
    TestimonialComponent,
    ExploreComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
  exports: [AboutComponent],
})
export class HomeModule {}
