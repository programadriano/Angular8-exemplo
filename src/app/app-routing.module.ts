import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

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
    loadChildren: () => import('./pages/relatorio/relatorio.module').then(m => m.RelatorioModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vitrine',
    loadChildren: () => import('./pages/vitrine/vitrine.module').then(m => m.VitrineModule)
  },
  { path: "**", redirectTo: "/index", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
