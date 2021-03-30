import { PedidoModule } from './pedido/pedido.module';
import { PedidoService } from './pedido.service';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';
import { ProdutoModule } from './produto/produto.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    TemplateModule,
    ProdutoModule,
    PedidoModule
  ],
  providers: [
    ProdutoService,
    ClienteService,
    PedidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
