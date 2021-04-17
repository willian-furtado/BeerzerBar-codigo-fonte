import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPedidoComponent } from './modal-pedido.component';


@NgModule({
  declarations: [
    ModalPedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalPedidoComponent
  ]
})
export class ModalPedidoModule { }
