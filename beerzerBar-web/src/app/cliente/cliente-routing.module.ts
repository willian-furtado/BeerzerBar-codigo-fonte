import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmClienteComponent } from './admCliente/admCliente.component';


const routes: Routes = [
  {
    path: 'painelClientes',
    component: AdmClienteComponent
  },
  {
    path: 'clientes',
    component: ClienteFormComponent
  },
  {
    path: 'clientes/:id',
    component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
