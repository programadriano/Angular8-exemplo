import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregaRoutingModule } from './entrega-routing.module';
import { EntregaComponent } from './entrega.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EntregaComponent],
  imports: [
    CommonModule,
    EntregaRoutingModule,
    SharedModule
  ]
})
export class EntregaModule { }
