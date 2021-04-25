
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ModalPedidoModule } from './pedido/modal-pedido/modal-pedido.module';
import { PedidoModule } from './pedido/pedido.module';
import { PedidoService } from './pedido.service';
import { ClienteService } from './cliente.service';
import { ProdutoService } from './produto.service';
import { ProdutoModule } from './produto/produto.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule, IConfig, INITIAL_CONFIG } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    TemplateModule,
    ProdutoModule,
    PedidoModule,
    ModalPedidoModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  providers: [
    ProdutoService,
    ClienteService,
    PedidoService,
    AuthService,
    [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
