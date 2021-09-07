import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SailingRoutingModule } from './sailing-routing.module';
import { SailingComponent } from './sailing/sailing.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SailingComponent],
  imports: [
    CommonModule,
    SailingRoutingModule,
    SharedModule
  ]
})
export class SailingModule { }
