import { ProdutoService } from './../../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})

export class ProdutoComponent implements OnInit {

  produtos$!: Observable<Produto[]>;
  editForm!: FormGroup;
  id!: number;
  produto!: Produto;
  quantidade!:number;
  preco!:number;
  categoria!: Text
  descricao!:Text;

  constructor(private service: ProdutoService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder){ }

ngOnInit() {
  this.editForm = this.fb.group({
    nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    preco: this.fb.control('', [Validators.required]),
    quantidade: this.fb.control('', [Validators.required, Validators.minLength(1)]),
    descricao: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    categoria: this.fb.control('', [Validators.required, Validators.minLength(3)]),
  });
}


  close(){
    this.router.navigate(['/PainelProdutos']);
  }

  salvar() {
    if(this.editForm.valid)
 {
    if(this.id == null){
       this.service.save(this.produto)
        .subscribe(
      (suc) =>
    {
      alert("Novo produto cadastrado com sucesso!");
      this.close();
    },
     (err) => {
      alert("Atenção. Erro ao cadastrar novo produto!");
     }
    );
  }
    else{
      this.service.updateProduct(this.id, this.editForm.value)
          .subscribe(
              (suc) => {
                  alert("Produto atualizado com sucesso!");
                  this.close();
              },
               (err) => {
                  alert("Erro na edição do novo pedido!");
              }
            );
          }
      }
            else{
                  alert("Atenção. Preeencha o formulario de forma correta!");
            }
      }
}
