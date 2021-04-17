import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from '../pedido/pedido.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPedidoModule } from './modal-pedido/modal-pedido.module';


@NgModule({
  declarations: [
    PedidoComponent,
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ModalPedidoModule
  ]
})
export class PedidoModule { }
