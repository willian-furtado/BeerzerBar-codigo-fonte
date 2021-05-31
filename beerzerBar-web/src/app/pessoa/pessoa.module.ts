import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { FuncionarioComponent } from '../funcionario/funcionario.component';



@NgModule({
  declarations:
  [
    PessoaFormComponent,
    FuncionarioComponent,

  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
