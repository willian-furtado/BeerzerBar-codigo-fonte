import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Produto } from './produto/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  showProduct()
  {
   return this.http.get<Produto[]>(`http://localhost:8080/api/produtos/listagem`);
  }

  obterTodos(): Observable<any> {
    return this.http.get<Produto[]>(`http://localhost:8080/api/produtos/listagem`);
  }


   /*Salva pedido*/
   save(produto: Produto): Observable<Produto> {
     return this.http.post<Produto>(`http://localhost:8080/api/produtos`, produto);
   }

  /*Obtem pedidos*/
   getProduct() {
     return this.http.get<Produto[]>(`http://localhost:8080/api/produtos`, )
            .toPromise()
            .then((response) => response);
   }

   deleteProduct(id: any)
   {
     return this.http.delete<Produto[]>('http://localhost:8080/api/produtos/' + id);
   }

   updateProduct(idProduto:number, produto: Produto)
  {
    return this.http.put<Produto[]>(`http://localhost:8080/api/clientes/${idProduto}`, produto)
    .pipe(take(1));
  }
}
