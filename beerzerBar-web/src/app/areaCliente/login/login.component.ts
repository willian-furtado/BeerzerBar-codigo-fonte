import { AuthService } from './../../auth.service';
import { Pessoa } from './../../pessoa/pessoa';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pessoa!: Pessoa ;
  loginForm!: FormGroup;

  constructor( private fb: FormBuilder,
    private reactiveform: ReactiveFormsModule,
    private route: Router,
    private router: ActivatedRoute,
    private auth: AuthService)
    { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      senha: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      token: ('tokenTest')
    });

  }
  /*
  const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['']);
  */
   async login()
   {
     if(this.loginForm.valid)
     {
       const resultado = await this.auth.login(this.loginForm.value);
       alert(`Ola bom te ver novamente`)
       this.route.navigate(['']);
       /*this.auth.login(this.loginForm.value)
       .subscribe
       (
         pessoa=> {alert(`Ola, ${pessoa.nome}`)},
        (response) =>
        {
          alert("Insira um usuario valido !");
        }
       )
       this.auth.estaLogado()*/
     }
     else
     {
      alert("Insira um usuario valido !");
     }


   }

}
