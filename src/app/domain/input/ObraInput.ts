import { Etapa } from "../model/etapa";

export interface ObraInput {
  clienteId: number;
  funcionarios: number[];
  etapa?: Etapa | undefined;
  descricao: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidadeId: number;
  estadoId: number;
}
