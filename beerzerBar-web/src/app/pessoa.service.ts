import { Pessoa } from './pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BEERZER } from './app.api';
import { retry, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient)
  {}
  show()
    {
      return this.http.get<Pessoa[]>(`${API_BEERZER}`);
    }

    peopleById(id :number)
    {
      return this.http.get<Pessoa[]>(`${API_BEERZER}/${id}`)
      .pipe(retry(1));
    }

    update(id: number, Pessoa:any )
    {
      return this.http.put<Pessoa[]>(`${API_BEERZER}/${id}`, Pessoa )
      .pipe(take(1));
    }

    delete(pessoa: Pessoa)
    {
      return this.http.delete<Pessoa[]>(`${API_BEERZER}/` + pessoa.id);
    }

    save(pessoa: Pessoa): Observable<Pessoa>{
     return this.http.post<Pessoa>(`${API_BEERZER}`, pessoa);
    }
}
