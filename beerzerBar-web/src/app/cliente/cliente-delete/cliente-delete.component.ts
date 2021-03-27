import { ClienteService} from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent {

  cliente: Cliente;

  constructor(private service: ClienteService) {
    this.cliente = new Cliente();
  }

  excluir() {
 this.service.excluirCliente('id')
     .subscribe(
         resultado => {
          console.log('Produto excluído com sucesso!');
     },
     erro => {
       if(erro.status == 404) {
            console.log('Produto não localizado!');
       }
     }
     );
 }

  onSubmit(){
   console.log(this.cliente);
  }
}
