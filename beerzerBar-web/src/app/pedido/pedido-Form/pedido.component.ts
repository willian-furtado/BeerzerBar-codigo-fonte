import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../../pedido.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent implements OnInit {

  pedidos$!: Observable<Pedido[]>;
  editForm!: FormGroup;
  id!: number;
  pedido!: Pedido;
  quantidade!:number;
  preco!:number;

  constructor(private service: PedidoService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder){ }

ngOnInit() {
  this.editForm = this.fb.group({
    nome: this.fb.control('', [Validators.required]),
    quantidade: this.fb.control('', [Validators.required]),
    preco: this.fb.control('', [Validators.required]),
  });
}


  close(){
    this.router.navigate(['/PainelPedidos']);
  }

  salvar() {
    if(this.editForm.valid)
 {
    if(this.id == null){
       this.service.save(this.editForm.value)
        .subscribe(
      (suc) =>
    {
      alert("Novo pedido cadastrado com sucesso!");
      this.close();
    },
     (err) => {
      alert("Erro ao cadastrar novo pedido!");
     }
    );
  }
    else{
      this.service.updatePedido(this.id, this.editForm.value)
          .subscribe(
              (suc) => {
                  alert("Pedido atualizado com sucesso!");
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
