import { InputComponent } from './template/input/input.component';
import { PessoaService } from './pessoa.service';
import { NovaContaComponent } from './areaCliente/login/nova-conta/nova-conta.component';
import { LoginComponent } from './areaCliente/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoaModule } from './pessoa/pessoa.module';
import { AuthService } from './auth.service';
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
import { DataTablesModule } from 'angular-datatables';
import { InicioComponent } from './areaCliente/inicio/inicio.component';
import { httpInterceptorProviders } from './interceptors/intercptors';


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
    InicioComponent,
    LoginComponent,
    NovaContaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClienteModule,
    TemplateModule,
    ProdutoModule,
    PedidoModule,
    DataTablesModule,
    PessoaModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
    NgxMaskModule.forRoot(maskConfigFunction)

  ],
  providers: [
    ProdutoService,
    ClienteService,
    PedidoService,
    PessoaService,
    AuthService,
    AuthGuard,
    httpInterceptorProviders,
    [{provide: LOCALE_ID, useValue: 'pt-br'}],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
