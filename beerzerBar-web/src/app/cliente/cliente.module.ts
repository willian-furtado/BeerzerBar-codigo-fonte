
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteFormComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule
  ],
  exports: [
    ClienteFormComponent
  ]
})
export class ClienteModule { }
