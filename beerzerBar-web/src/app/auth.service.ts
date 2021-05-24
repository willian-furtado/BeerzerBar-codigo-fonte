import { API_BEERZER } from './app.api';
import { retry, take, map, mapTo } from 'rxjs/operators';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, pipe, observable } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private pessoaSubject!: BehaviorSubject<Pessoa>;
  pessoa!: Observable<Pessoa>;
  varificaAuth: boolean = false;
  mostrarConteudo = new EventEmitter <boolean> (false);
  constructor(private http: HttpClient,
              private router: Router,)
  {}

  login(email: string , senha:string)
  {

    return this.http.post<Pessoa>(`${API_BEERZER}` , {email: email , senha: senha});
  }

  estaLogado()
  {
    if(this.login !== undefined)
    {
      this.router.navigate(['/painelClientes']);
      this.varificaAuth= true;
      this.mostrarConteudo.emit(true)
    }
    this.varificaAuth= false;
    this.mostrarConteudo.emit(false);

  }
  authVerificado()
  {
    return this.varificaAuth;
  }
  logout() {
    localStorage.removeItem('pessoa');
    //this.pessoaSubject.next(null);
    this.router.navigate(['/login']);
  }

}
