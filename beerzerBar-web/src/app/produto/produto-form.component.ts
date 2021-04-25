import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  produtos$!: Observable<Produto[]>;
  abrirFechar_Modal: boolean = false;
  produto!: Produto;
  success: boolean = false;

  constructor(private service: ProdutoService,
              private Router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(produtos=>this.produtos$ = this.service.showProduct());
  }

  onSubmit(){
    console.log(this.produto);
   }

   abrirModal(){
     this.abrirFechar_Modal = true;
  }

  salvar() {
    this.service.save(this.produto)
       .subscribe(response => {
         this.success = true;
       });
  }

  excluir(id: any) {
      this.service.deleteProduct(id)
          .subscribe(response => {
          //this.cliente = this.cliente.filter(item => item.id !== this.cliente.id);
          console.log('Pedido excluido com sucesso!');
          this.success = true;
      });
  }

}
