import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AboutComponent } from '../home/about/about.component';
import { ExploreComponent } from '../home/explore/explore.component';
import { TestimonialComponent } from '../home/testimonial/testimonial.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    PrivacyComponent,
    AboutComponent,
    ExploreComponent,
    TestimonialComponent,
    
  ],
  imports: [
    CommonModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
