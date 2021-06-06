import { PessoaService } from './../../pessoa.service';
import { Pessoa } from './../../pessoa/pessoa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  newFuncForm!: FormGroup;
  funcionario!: Pessoa;
  cpfPatern= /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
  id!: number;
  input: any;

  constructor(private service: PessoaService,
    private fb: FormBuilder,
    private reactiveform: ReactiveFormsModule,
    private route: Router,
    private router: ActivatedRoute) {
    this.funcionario = new Pessoa();
}

  ngOnInit(): void {

    this.newFuncForm = this.fb.group({
      nome: this.fb.group({
        pNome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        sNome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      }),
      cpf: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),Validators.pattern(this.cpfPatern)]),
      dataNascimento: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control(''),
      tipo: ('F')
    },);

    this.router.params.subscribe((data) => {
      this.id = data.id;
    });
    if (this.id) {
      this.service
        .peopleById(this.id).subscribe(funcionario=>
       this.newFuncForm.patchValue(funcionario)
    );
    }
  }

  close()
  {
    this.route.navigate(['/painelFuncionarios']);
  }
  salvar() {
    if(this.newFuncForm.valid)
    {
      console.log(this.newFuncForm.value)
      if(this.id == null){
      this.service.save(this.newFuncForm.value)
      .subscribe(
        (suc)=>
        {
          alert(`${suc.nome} Cadastrado com sucesso!`);
          this.close();
        },
        (err) =>
        {
          alert("Erro no cadastro!");
        }
      );
      }
      else
      {
        this.service.update(this.id, this.newFuncForm.value)
        .subscribe(
          (suc)=>
          {
            alert(`Funcionario Atualizado com sucesso!`);
            this.close();
          },
          (err) =>
          {
            alert("Erro na edição!");
          }
        );
      }
    }
    else
    {
      alert("Preeencha o formulario de forma correta")
    }
 }


}
