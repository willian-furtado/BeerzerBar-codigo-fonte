import { ProdutoService } from './../../produto.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent {

  produto: Produto;
  success: boolean = false;

  constructor(private service: ProdutoService) {
    this.produto = new Produto;
  }

  salvar() {
    this.service.salvarProduto(this.produto)
    .subscribe(response => {
      this.success = true;
    });
  }

  onSubmit() {
    console.log(this.produto);
  }

}
