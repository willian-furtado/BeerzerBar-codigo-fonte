import { Pedido } from './pedido/pedido';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
   constructor(private http: HttpClient) { }

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
     getOrderByClient(idCliente: any){
         return this.http.get<Pedido[]>(`http://localhost:8080/api/pedidos/${idCliente}/pedidos`)
                           .toPromise()
                           .then((response) => response);
     }

     deleteClient(id: any)
     {
       return this.http.delete<Pedido[]>('http://localhost:8080/api/pedidos/' + id);
     }
}

