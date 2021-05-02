import { PedidoService } from './../../pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pedido } from './../pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admPedido',
  templateUrl: './admPedido.component.html',
  styleUrls: ['./admPedido.component.css']
})
export class AdmPedidoComponent implements OnInit {

  pedidos$!: Observable<Pedido[]>;
  pedido!: Pedido;

  constructor(private service: PedidoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(pedidos=>this.pedidos$ = this.service.showOrder());
  }

  OnRoute()
  {

  }

OnEdit(Pedido: Pedido){

}

  OnDelete(pedido: Pedido)
  {
    this.service.deletePedido(pedido).subscribe(
          (sucess) => {
            alert("Pedido excluido com sucesso!!");
            window.location.reload();
          },
          (error) => {
            alert("Atenção. Erro ao Excluir pedido!");
          }
        );
  }
}


