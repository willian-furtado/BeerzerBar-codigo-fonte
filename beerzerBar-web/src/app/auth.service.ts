import { API_BEERZER } from './app.api';
import { retry, take, map, mapTo, tap } from 'rxjs/operators';
import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, pipe, observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  pessoa!: Pessoa;
  varificaAuth: boolean = false;
  mostrarConteudo = new EventEmitter <boolean> (false);
  constructor(private http: HttpClient,
              private router: Router,)
  {}

  async login(pessoa: Pessoa) {
    const resultado = await this.http.post<any>(`${API_BEERZER}` ,pessoa).toPromise();
    if (resultado && resultado.access_token) {
      window.localStorage.setItem('token', resultado.token);
      return true;
    }
    return false;
  }

  /*async createAccount(account: any) {
    const result = await this.http.post<any>(`${environment.api}/users`, account).toPromise();
    return result;
  }*/

  verificaToken() { //getAuthorizationToken
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string):Date
  {
    const decoded: any = jwtDecode(token)

    /*if (decoded.exp === undefined) {
       return null;

    }*/
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  usuarioLogado() {
    const token = this.verificaToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
  /*login(email: string , senha:string)
  {
    return this.http.post<Pessoa>(`${API_BEERZER}` , {email: email , senha: senha})
    .pipe(tap(pessoa=> this.pessoa = pessoa));
  }

  estaLogado()
  {
    if(this.pessoa !== undefined)
    {
      this.varificaAuth= true;
      this.mostrarConteudo.emit(true)
      return true;
    }
    this.varificaAuth= false;
    this.mostrarConteudo.emit(false);
    return false
  }
  redireciona()
  {

  }
  authVerificado()
  {
    return this.varificaAuth;
  }
  logout() {
    localStorage.removeItem('pessoa');
    //this.pessoaSubject.next(null);
    this.router.navigate(['/login']);
  }*/

}
