import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente} from './cliente/cliente';
import { tap, map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

 constructor(private http: HttpClient){ }

    salvarCliente(cliente: Cliente): Observable<Cliente>{
     return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
    }
    excluirCliente(id: number){
     return this.http.delete<Cliente[]>('http://localhost:8080/api/clientes?id=' + id);
    }
 }
