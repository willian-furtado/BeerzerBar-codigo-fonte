import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido/pedido';
import { PedidoService } from '../pedido.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  pedidos$!: Observable<Pedido[]>;
  abrirFechar_Modal: boolean = false;
  pedido!: Pedido;
  success: boolean = false;

  constructor(private service: PedidoService,
              private router: Router,
              private route: ActivatedRoute){ }


  ngOnInit(): void {
    this.route.params.subscribe(pedidos=>this.pedidos$ = this.service.showOrder());
  }

  onSubmit(){
    console.log(this.pedido);
   }

   abrirModal(){
     this.abrirFechar_Modal = true;
  }

  salvar() {
    this.service.save(this.pedido)
       .subscribe(response => {
         this.success = true;
       });
  }

  excluir(id: any) {
      this.service.deletePedido(id)
          .subscribe(response => {
          //this.cliente = this.cliente.filter(item => item.id !== this.cliente.id);
          console.log('Pedido excluido com sucesso!');
          this.success = true;
      });
  }
}
