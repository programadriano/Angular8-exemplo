import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntregaRoutingModule } from './entrega-routing.module';
import { EntregaComponent } from './entrega.component';

@NgModule({
  declarations: [EntregaComponent],
  imports: [
    CommonModule,
    EntregaRoutingModule
  ]
})
export class EntregaModule { }
