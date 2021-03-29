import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../cliente.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-clientEdit',
  templateUrl: './clientEdit.component.html',
  styleUrls: ['./clientEdit.component.css']
})
export class ClientEditComponent implements OnInit {

  cliente!: Cliente;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  editForm!: FormGroup;
  input: any;
  constructor(private fb: FormBuilder,
              private service: ClienteService,
              private route: Router,
              private router: ActivatedRoute)
              {}

  ngOnInit() {

    this.router.params.subscribe(
      (params: any ) => {
        const idcli = params['id'];
        const cliente$ = this.service.clientsById(idcli);
        cliente$.subscribe(cliente =>{ this.updateForm(cliente);
        });
      }
    );
    this.editForm = this.fb.group({
      id: [null],
      nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      cpf: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      dataNascimento: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });
  }

  updateForm(cliente: any)
  {
    this.editForm.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      email: cliente.email,
      cpf: cliente.cpf,
      dataNascimento: cliente.dataNascimento
    })
  }
  close()
  {
    this.route.navigate(["/listaClientes"]);
  }
  Save()
  {
      if(this.editForm.valid)
      {
        this.service.updateClient(this.editForm.value).subscribe
        (
            success =>
            {
              this.route.navigate(['/listaClientes']);
            }
        )
      }
  }


}
