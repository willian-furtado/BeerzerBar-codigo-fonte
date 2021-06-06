import { AdmPedidoComponent } from './admPedido/admPedido.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pedido-Form/pedido.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateModule } from './../template/template.module';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    PedidoComponent,
    AdmPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateModule,
    DataTablesModule,

  ]
})
export class PedidoModule { }
