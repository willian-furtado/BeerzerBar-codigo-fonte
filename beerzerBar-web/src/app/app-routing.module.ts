import { InicioComponent } from './areaCliente/inicio/inicio.component';
import { NovaContaComponent } from './areaCliente/login/nova-conta/nova-conta.component';
import { LoginComponent } from './areaCliente/login/login.component';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '', component: InicioComponent,
    children:
    [
      {path: '', redirectTo: 'login', pathMatch: 'full' },
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: NovaContaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
