import { ClientEditComponent } from './clientEdit/clientEdit.component';
import { ClientDeleteComponent } from './clientDelete/clientDelete.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmClienteComponent } from './admCliente/admCliente.component';


const routes: Routes = [
  {
    path: 'editarCliente/:id',
    component: ClientEditComponent
  },
  {
    path: 'excluirCliente/:id',
    component: ClientDeleteComponent  },
  {
    path: 'listaClientes',
    component: AdmClienteComponent
  },
  {
    path: 'cliente-form',
    component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
