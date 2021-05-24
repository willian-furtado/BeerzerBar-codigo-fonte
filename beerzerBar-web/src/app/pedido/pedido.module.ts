import { AdmPedidoComponent } from './admPedido/admPedido.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pedido-Form/pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PedidoComponent,
    AdmPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PedidoModule { }
