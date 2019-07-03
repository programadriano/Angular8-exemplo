import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'carrinho',
    loadChildren: () => import('./pages/carrinho/carrinho.module').then(m => m.CarrinhoModule)
  },
  {
    path: 'entrega',
    loadChildren: () => import('./pages/entrega/entrega.module').then(m => m.EntregaModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pages/relatorio/relatorio.module').then(m => m.RelatorioModule)
  },
  {
    path: 'vitrine',
    loadChildren: () => import('./pages/vitrine/vitrine.module').then(m => m.VitrineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
