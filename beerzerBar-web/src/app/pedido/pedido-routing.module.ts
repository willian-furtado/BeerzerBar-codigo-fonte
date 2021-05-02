import { PedidoComponent } from './pedido-Form/pedido.component';
import { AdmPedidoComponent } from './admPedido/admPedido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'painelPedidos',
    component: AdmPedidoComponent
  },
  {
    path: 'pedidos',
    component: PedidoComponent
  },
  {
    path: 'pedidos/:id',
    component: AdmPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
