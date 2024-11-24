import { Cliente } from './cliente';
import { Endereco } from "./endereco";
import { Etapa } from "./etapa";
import { Funcionario } from "./funcionario";

export class Obra {
    id: number;
    cliente: Cliente;
    endereco: Endereco;
    funcionarios: Funcionario[] = [];
    etapa: Etapa = Etapa.STAND_BY;
    descricao: string;
}