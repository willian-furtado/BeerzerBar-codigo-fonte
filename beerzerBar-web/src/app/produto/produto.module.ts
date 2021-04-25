import { FormsModule } from '@angular/forms';
import { ProdutoRoutingModule } from './produto-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from './produto-form.component';



@NgModule({
  declarations: [
    ProdutoFormComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule
  ]
})
export class ProdutoModule { }
