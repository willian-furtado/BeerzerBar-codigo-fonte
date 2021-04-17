import { PedidoComponent } from '../pedido/pedido.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';


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
    component: ModalPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
