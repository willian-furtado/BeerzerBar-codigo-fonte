import { Pedido } from './pedido/pedido';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, retry, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
   constructor(private http: HttpClient) { }

    showOrder()
    {
     return this.http.get<Pedido[]>(`http://localhost:8080/api/pedidos`,);
    }

     /*Salva pedido*/
     save(pedido: Pedido): Observable<Pedido> {
       return this.http.post<Pedido>(`http://localhost:8080/api/pedidos`, pedido);
     }

    /*Obtem pedidos*/
     getOrders() {
       return this.http.get<Pedido[]>(`http://localhost:8080/api/pedidos`, )
              .toPromise()
              .then((response) => response);
     }

     /*Obtem pedido*/
     getOrder(idPedido: any): Observable<Pedido>{
        return this.http.get<Pedido>(`http://localhost:8080/api/pedidos/${idPedido}`);
     }

     /*Obter pedido feito por um cliente*/
     getOrderByPedido(idPedido: any){
         return this.http.get<Pedido[]>(`http://localhost:8080/api/pedidos/${idPedido}/pedidos`)
                           .toPromise()
                           .then((response) => response);
     }

     deletePedido(id: any)
     {
       return this.http.delete<Pedido[]>('http://localhost:8080/api/pedidos/' + id);
     }

     updatePedido(pedido: Pedido)
    {
      return this.http.put<Pedido[]>(`http://localhost:8080/api/clientes/`+ pedido.id_pedido, pedido )
      .pipe(take(1));
    }
}

