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

    showClitent()
    {
      return this.http.get<Cliente[]>(`http://localhost:3000/clientes`,);
    }

    clientsById(id :number)
    {
      return this.http.get<Cliente[]>(`http://localhost:3000/clientes/${id}`)
      .pipe(retry(1));
    }

    updateClient(id: number, cliente:any )
    {
      return this.http.put<Cliente[]>(`http://localhost:3000/clientes/${id}`, cliente )
      .pipe(take(1));
    }

    deleteClient(cliente: Cliente)
    {
      return this.http.delete<Cliente[]>(`http://localhost:3000/clientes/` + cliente.id);
    }

    salvarCliente(cliente: Cliente): Observable<Cliente>{
     return this.http.post<Cliente>('http://localhost:3000/clientes', cliente);
    }


 }
