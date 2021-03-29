import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente} from './cliente/cliente';
import { tap, map, retry, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

 constructor(private http: HttpClient){ }

    mostrarCliente()
    {
      return this.http.get<Cliente[]>(`http://localhost:8080/api/clientes`,);
    }
    clientsById(id: any)
    {
      return this.http.get<Cliente[]>(`http://localhost:8080/api/clientes/`+ id)
      .pipe(retry(1));
    }
    updateClient(cliente: Cliente)
    {
      return this.http.put<Cliente[]>(`http://localhost:8080/api/clientes/`+ cliente.id , cliente )
      .pipe(take(1));
    }

    salvarCliente(cliente: Cliente): Observable<Cliente>{
     return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    }
    excluirCliente(id: number){
     return this.http.delete<Cliente[]>('http://localhost:8080/api/clientes?id=' + id);
    }
 }
