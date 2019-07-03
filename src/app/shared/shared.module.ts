import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuscaComponent } from './components/busca/busca.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BuscaComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
