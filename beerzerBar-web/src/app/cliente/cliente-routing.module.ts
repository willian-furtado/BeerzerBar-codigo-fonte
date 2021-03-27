import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteDeleteComponent } from './cliente-delete/cliente-delete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente-form',
    component: ClienteFormComponent
  },
  {
    path: 'cliente-delete',
    component: ClienteDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
