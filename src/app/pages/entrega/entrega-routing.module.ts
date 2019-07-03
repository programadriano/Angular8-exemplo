import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregaComponent } from './entrega.component';

const routes: Routes = [
  { path: '', component: EntregaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregaRoutingModule { }
