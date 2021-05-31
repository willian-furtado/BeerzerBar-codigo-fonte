import { PedidoComponent } from './pedido-Form/pedido.component';
import { AdmPedidoComponent } from './admPedido/admPedido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'obterPedidos',
    component:PedidoComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'obterPedido:/id',
    component: PedidoComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'pedidos',
    component: PedidoComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'cadastrarPedido',
    component: PedidoComponent,
  //  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
