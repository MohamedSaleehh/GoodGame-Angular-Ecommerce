import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [SliderComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
