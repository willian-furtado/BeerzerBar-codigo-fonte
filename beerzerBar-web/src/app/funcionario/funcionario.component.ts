import { PessoaService } from './../pessoa.service';
import { Pessoa } from './../pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionarios$!: Observable<Pessoa[]>;
  funcionari!: Pessoa;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private service: PessoaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }

    this.route.params.subscribe(funcionarios=> {
      this.funcionarios$ = this.service.show()
      this.dtTrigger.next();
    });

  }

  OnDelete(funcionario: Pessoa)
  {
    this.service.delete(funcionario).subscribe(
          (sucess) => {
            alert(`${funcionario.nome} Excluido com sucesso!`);
            window.location.reload();
          },
          (error) => {
            alert(`Erro ao Excluir! ${funcionario.nome}`);
          }
        );
  }
}
