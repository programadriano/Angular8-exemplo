import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VitrineComponent } from './vitrine.component';

const routes: Routes = [
  { path: '', component: VitrineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VitrineRoutingModule { }
