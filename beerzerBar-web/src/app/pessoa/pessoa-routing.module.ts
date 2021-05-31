
import { FuncionarioComponent } from './../funcionario/funcionario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioFormComponent } from '../funcionario/funcionario-form/funcionario-form.component';

const routes : Routes = [
  {
    path: 'painelFuncionarios', component: FuncionarioComponent,
    children:
    [
      { path: 'funcionario', component: FuncionarioFormComponent},
      { path: 'funcionario/:id', component: FuncionarioComponent},

    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }


