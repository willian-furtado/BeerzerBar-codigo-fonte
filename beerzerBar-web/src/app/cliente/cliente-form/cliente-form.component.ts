import { ClienteService} from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent {

  cliente: Cliente;
  success: boolean = false;


  constructor(private service: ClienteService) {
    this.cliente = new Cliente();
  }

  salvar() {
   this.service.salvarCliente(this.cliente)
   .subscribe(response => {
     this.success = true;
   });
 }

  onSubmit(){
   console.log(this.cliente);
  }
}
