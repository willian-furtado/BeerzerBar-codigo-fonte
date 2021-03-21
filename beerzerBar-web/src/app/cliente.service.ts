import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente} from './cliente/cliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

 constructor(private http: HttpClient){ }

 salvarCliente(cliente: Cliente): Observable<Cliente>{
   return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
 }
}
