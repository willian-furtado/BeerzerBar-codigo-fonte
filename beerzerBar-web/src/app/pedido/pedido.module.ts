import { PedidoComponent } from '../pedido/pedido.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    PedidoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PedidoModule { }
