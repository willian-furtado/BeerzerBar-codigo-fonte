import { FormsModule } from '@angular/forms';
import { ProdutoRoutingModule } from './produto-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { FieldsetModule } from "primeng/fieldset";
import { InputMaskModule } from "primeng/inputmask";
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    ProdutoFormComponent,
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    FieldsetModule,
    BrowserAnimationsModule,
    InputMaskModule,
    DialogModule,
  ]
})
export class ProdutoModule { }
