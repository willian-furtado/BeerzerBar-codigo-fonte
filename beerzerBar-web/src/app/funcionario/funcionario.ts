import { Pessoa } from './../pessoa/pessoa';
export class Funcionario{
  public id?: number;
  public pessoa?: Pessoa;
  public matricula?: number;
  constructor(){
    this.pessoa = new Pessoa();
  }
}
