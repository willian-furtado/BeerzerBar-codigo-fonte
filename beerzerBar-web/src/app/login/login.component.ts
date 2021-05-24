import { Pessoa } from './../pessoa/pessoa';
import { AuthService } from './../auth.service';
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
    });

  }
   login()
   {
     if(this.loginForm.valid)
     {
       this.auth.login(this.loginForm.value.email, this.loginForm.value.senha)
       .subscribe
       (
         pessoa=> console.log(pessoa)
       )
       this.auth.estaLogado()
     }


   }

}
