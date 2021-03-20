import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  salvarProduto(produto: Produto): Observable<Produto>{
      return this.http.post<Produto>('http://localhost:8080/api/produtos', produto);
  }
}
