import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscaComponent } from './components/busca/busca.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscaComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    HeaderComponent,
    FooterComponent,
    BuscaComponent
  ]
})
export class SharedModule { }
