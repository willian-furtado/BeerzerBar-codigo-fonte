import { AdmProdutoComponent } from './admProduto/admProduto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto-Form/produto-form.component';

const routes: Routes = [
  {
    path: 'painelProdutos',
    component: AdmProdutoComponent
  },
  {
    path: 'produtos',
    component: ProdutoComponent
  },
  {
    path: 'pedidos/:id',
    component: AdmProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
