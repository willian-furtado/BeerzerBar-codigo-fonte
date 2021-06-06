import { PessoaService } from './../../pessoa.service';
import { Pessoa } from './../../pessoa/pessoa';

import { ClienteService} from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  cliente: Pessoa;
  success: boolean = false;
  cpfPatern= /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
  editForm!: FormGroup;
  id!: number;
  input: any;

  constructor(private service: PessoaService,
              private fb: FormBuilder,
              private reactiveform: ReactiveFormsModule,
              private route: Router,
              private router: ActivatedRoute) {
              this.cliente = new Pessoa();
  }

  ngOnInit() {

    this.editForm = this.fb.group({
      nome: this.fb.group({
        pNome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        sNome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      }),
      cpf: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),Validators.pattern(this.cpfPatern)]),
      dataNascimento: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control(''),
      tipo: ('C')
    });

    this.router.params.subscribe((data) => {
      this.id = data.id;
    });
    if (this.id) {
      console.log(this.id)
      this.service.peopleById(this.id).subscribe(cliente=>
       this.editForm.patchValue(cliente)
    );
    }
  }

  close()
  {
    this.route.navigate(['/painelClientes']);
  }
  salvar() {
    if(this.editForm.valid)
    {
      if(this.id == null){
      this.service.save(this.editForm.value)
      .subscribe(
        (suc)=>
        {
          alert("Novo cliente cadastrado!");
          this.close();
        },
        (err) =>
        {
          alert("Erro no cadastro!");
        }
        //this.success = true;
      );
      }
      else
      {

        this.service.update(this.id, this.editForm.value)
        .subscribe(
          (suc)=>
          {
            alert("Cliente atualizado!");
            this.close();
          },
          (err) =>
          {
            alert("Erro na edição!");
          }
          //this.success = true;
        );
      }
    }
    else
    {
      alert("Preeencha o formulario de forma correta")
    }
 }

}
