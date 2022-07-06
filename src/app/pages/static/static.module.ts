import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    StaticRoutingModule
  ]
})
export class StaticModule { }
