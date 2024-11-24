import { Endereco } from "./endereco";

export enum TipoFuncionario {
  INTERNO,
  EXTERNO,
}

export class Funcionario {
  id: number;
  nome: string;
  sobrenome: string;
  apelido: string;
  email: string;
  cargo: string;
  empresa: string;
  tipo = TipoFuncionario.INTERNO;
  endereco: Endereco;
}
