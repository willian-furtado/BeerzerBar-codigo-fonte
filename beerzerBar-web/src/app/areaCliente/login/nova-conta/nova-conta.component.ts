import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {


  newUserForm!: FormGroup;
  cpfPatern= /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/;
  sPatern= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
  constructor( private fb: FormBuilder,
    private reactiveform: ReactiveFormsModule,
    private route: Router,
    private router: ActivatedRoute,
    private auth: AuthService)
    { }

  ngOnInit(): void {

    this.newUserForm = this.fb.group({
      nome: this.fb.group({
        pNome: this.fb.control('', [Validators.required, Validators.minLength(3)]),
        snome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      }),
      cpf: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(11),Validators.pattern(this.cpfPatern)]),
      dataNascimento: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required, Validators.minLength(5),Validators.pattern(this.sPatern)]),
      csenha: this.fb.control('', [Validators.required, Validators.minLength(5),Validators.pattern(this.sPatern)]),
      tipo: ('C')
    },{validator: this.validaSenha});

  }
  validaSenha (form: FormGroup)
  {
    let pass = form.controls.senha.value;
    let confPass = form.controls.csenha.value;
    return pass === confPass ? null : { notSame: true }
  }
  async salvar()
  {
    if(this.newUserForm.valid)
    {
      /*
      const resultado = await this.auth.login(this.loginForm.value);
       alert(`Ola bom te ver novamente`)
       this.route.navigate(['']);
      */
       const resultado = await this.auth.peopleByEmail(this.newUserForm.value);
       if(!resultado)
       {
          const result = await this.auth.createAccount(this.newUserForm.value);
          alert(`Conta craiada com sucesso bem vindo ao Beerzer!`)
          this.route.navigate(['']);
       }
       else
       {
        alert(`Erro provalvelmente Voce ja esta cadastrado!`)
        this.route.navigate(['/login']);
       }
    }
    else
    {
      alert(`Por favor preeencha o formulario corretamente`)
    }
  }

}
