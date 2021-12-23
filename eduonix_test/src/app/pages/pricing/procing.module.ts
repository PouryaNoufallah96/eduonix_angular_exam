import { PricingItemComponent } from './pricing-item/pricing-item.component';
import { PricingComponent } from './pricing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [PricingComponent, PricingItemComponent],
  declarations: [PricingComponent, PricingItemComponent],
  imports: [
    CommonModule,
  ]
})
export class PricingModule { }
