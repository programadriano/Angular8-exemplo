import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioComponent } from './relatorio.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    SharedModule
  ]
})
export class RelatorioModule { }
