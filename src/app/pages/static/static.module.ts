import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticRoutingModule } from './static-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [AboutUsComponent, PrivacyComponent],
  imports: [CommonModule, StaticRoutingModule, HomeModule],
})
export class StaticModule {}
