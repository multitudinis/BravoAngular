import { Endereco } from "./endereco";

export class Cliente {
    id: number;
    nome: string;
    sobrenome: string;
    apelido: string;
    cpf: string;
    email: string;
    cargo: string;
    empresa: string;
    endereco: Endereco;
  }