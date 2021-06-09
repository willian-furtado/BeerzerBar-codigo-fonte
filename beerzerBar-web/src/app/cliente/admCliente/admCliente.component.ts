import { PessoaService } from './../../pessoa.service';
import { Pessoa } from './../../pessoa/pessoa';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admCliente',
  templateUrl: './admCliente.component.html',
  styleUrls: ['./admCliente.component.css']
})
export class AdmClienteComponent implements OnInit {

  clientes$!: Observable<Pessoa[]>;
  cliente!: Cliente;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  i!: Pessoa


  constructor(private service: PessoaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }

    this.route.params.subscribe(clientes=> {
      this.clientes$ = this.service.show('C')
      this.dtTrigger.next();
    });
  }

  OnRoute()
  {

  }


  OnDelete(cliente: Cliente)
  {
    this.service.delete(cliente).subscribe(
          (sucess) => {
            alert("Excluido com sucesso!!");
            window.location.reload();
          },
          (error) => {
            alert("Erro ao Excluir!!");
          }
        );
  }
}


