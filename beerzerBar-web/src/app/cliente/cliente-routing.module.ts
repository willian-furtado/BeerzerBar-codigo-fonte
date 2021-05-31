import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmClienteComponent } from './admCliente/admCliente.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'painelClientes',
    component: AdmClienteComponent,
   // canActivate: [AuthGuard]
  },
  {
    path: 'clientes',
    component: ClienteFormComponent,
  //  canActivate: [AuthGuard]
  },
  {
    path: 'clientes/:id',
    component: ClienteFormComponent,
   // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
