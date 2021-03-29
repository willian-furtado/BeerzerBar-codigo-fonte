import { ClientEditComponent } from './clientEdit/clientEdit.component';
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
