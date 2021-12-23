import { ServicesComponent } from './services.component';
import { ServiceItemComponent } from './service-item/service-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [ServiceItemComponent, ServicesComponent],
  declarations: [ServiceItemComponent, ServicesComponent],
  imports: [
    CommonModule,
  ]
})
export class ServicesModule { }
