import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VitrineRoutingModule } from './vitrine-routing.module';
import { VitrineComponent } from './vitrine.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VitrineComponent],
  imports: [
    CommonModule,
    VitrineRoutingModule,
    SharedModule
  ]
})
export class VitrineModule { }
