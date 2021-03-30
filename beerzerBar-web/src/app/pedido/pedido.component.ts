import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private service: PedidoService) { }

  ngOnInit(): void {
  }

  cliente!: Cliente;
  success: boolean = false;

  salvar() {
    this.service.save(this.cliente)
       .subscribe(response => {
         this.success = true;
       });
}

    excluir(id: any) {
      this.service.deleteClient(id)
          .subscribe(response => {
          //this.cliente = this.cliente.filter(item => item.id !== this.cliente.id);
          console.log('Cliente excluido com sucesso!');
          this.success = true;
       });
   }

   onSubmit(){
    console.log(this.cliente);
   }

}
