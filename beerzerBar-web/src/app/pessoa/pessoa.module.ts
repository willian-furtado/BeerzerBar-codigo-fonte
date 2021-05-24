import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaRoutingModule } from './pessoa-routing.module';



@NgModule({
  declarations: [PessoaFormComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ]
})
export class PessoaModule { }
