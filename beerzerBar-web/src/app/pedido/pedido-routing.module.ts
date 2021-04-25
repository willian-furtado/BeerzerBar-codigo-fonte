import { PedidoComponent } from '../pedido/pedido.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'obterPedidos',
    component:PedidoComponent
  },
  {
    path: 'obterPedido:/id',
    component: PedidoComponent
  },
  {
    path: 'pedidos',
    component: PedidoComponent
  },
  {
    path: 'cadastrarPedido',
    component: PedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
