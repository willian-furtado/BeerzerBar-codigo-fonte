import { ProdutoService } from './../../produto.service';
import { Produto } from './../produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admProduto',
  templateUrl: './admProduto.component.html',
  styleUrls: ['./admProduto.component.css']
})
export class AdmProdutoComponent implements OnInit {

  produtos$!: Observable<Produto[]>;
  produto!: Produto;

  constructor(private service: ProdutoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(produtos=>this.produtos$ = this.service.showProduct());
  }

  OnRoute()
  {

  }

OnEdit(produto: Produto){

}

  OnDelete(produto: Produto)
  {
    this.service.deleteProduct(produto).subscribe(
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


