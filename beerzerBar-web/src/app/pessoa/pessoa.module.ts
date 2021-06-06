import { TemplateModule } from './../template/template.module';
import { InputComponent } from './../template/input/input.component';
import { FuncionarioFormComponent } from './../funcionario/funcionario-form/funcionario-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { FuncionarioComponent } from '../funcionario/funcionario.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations:
  [
    FuncionarioComponent,
    FuncionarioFormComponent,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    TemplateModule
  ]
})
export class PessoaModule { }
