import { Etapa } from "./etapa";
import { Funcionario } from "./funcionario";
import { Obra } from "./obra";
import { Recorrencia } from "./recorrencia";

export class Tarefa {
    id: number;
    delegador?: Funcionario;
    executor?: Funcionario;
    coordenador?: Funcionario;
    obra?: Obra;
    etapa = Etapa.STAND_BY;
    recorrencia = Recorrencia.DIARIA;
    descricaoSintetica?: string;
    descricaoAnalitica?: string;
    dataInicio?: Date;
    dataTermino?: Date;
    agenteFinal?: string;
    prioridade: string;
    duracao?: Date;
    visivelPor?: string;
  }