
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

  cliente: Cliente;
  success: boolean = false;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  editForm!: FormGroup;
  id!: number;
  input: any;

  constructor(private service: ClienteService,
              private fb: FormBuilder,
              private reactiveform: ReactiveFormsModule,
              private route: Router,
              private router: ActivatedRoute) {
              this.cliente = new Cliente();
  }

  ngOnInit() {

    this.editForm = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      cpf: this.fb.control('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
      dataNascimento: this.fb.control('', [Validators.required, Validators.minLength(6)])
    });

    this.router.params.subscribe((data) => {
      this.id = data.id;
    });
    if (this.id) {
      console.log(this.id)
      this.service
        .clientsById(this.id).subscribe(cliente=>
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
      this.service.salvarCliente(this.editForm.value)
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

        this.service.updateClient(this.id, this.editForm.value)
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
