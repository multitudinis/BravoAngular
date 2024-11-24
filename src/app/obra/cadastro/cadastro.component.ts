import { Etapa } from "./../../domain/model/etapa";
import { Endereco } from "./../../domain/model/endereco";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ObraInput } from "src/app/domain/input/ObraInput";
import { Cliente } from "src/app/domain/model/cliente";
import { Funcionario } from "src/app/domain/model/funcionario";
import { Obra } from "src/app/domain/model/obra";
import { ObraService } from "src/app/services/obra.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  data: ObraInput;
  ShowFilter = true;
  isSearching = false;

  constructor(private fb: FormBuilder, private service: ObraService) {}

  optionsCliente = [
    { id: 1, value: "Cliente A" },
    { id: 2, value: "Ciente B" },
    { id: 3, value: "Cliente C" },
    { id: 4, value: "Cliente C" },
    { id: 5, value: "Cliente C" },
    { id: 6, value: "Cliente C" },
    { id: 7, value: "Cliente C" },
    { id: 8, value: "Cliente C" },
    { id: 9, value: "Cliente C" },
    { id: 10, value: "Cliente C" },
  ];
  optionsFuncionario = [
    { id: 1, value: "Funcionario A" },
    { id: 2, value: "Funcionario B" },
    { id: 4, value: "Cliente C" },
    { id: 5, value: "Cliente C" },
    { id: 6, value: "Cliente C" },
    { id: 7, value: "Cliente C" },
    { id: 8, value: "Cliente C" },
    { id: 9, value: "Cliente C" },
    { id: 10, value: "Cliente C" },
  ];

  optionsCidade = [
    { id: 1, value: "Cidade A" },
    { id: 2, value: "Cidade B" },
    { id: 4, value: "Cliente C" },
    { id: 5, value: "Cliente C" },
    { id: 6, value: "Cliente C" },
    { id: 7, value: "Cliente C" },
    { id: 8, value: "Cliente C" },
    { id: 9, value: "Cliente C" },
    { id: 10, value: "Cliente C" },
  ];

  optionsEstado = [
    { id: 1, value: "Estado A" },
    { id: 2, value: "Estado B" },
    { id: 4, value: "Cliente C" },
    { id: 9, value: "Cliente C" },
    { id: 10, value: "Cliente C" },
  ];

  obraFormGroup = this.fb.group({
    descricao: ["", Validators.required],
    cep: ["", Validators.required],
    logradouro: ["", Validators.required],
    numero: ["", Validators.required],
    bairro: ["", Validators.required],
    complemento: ["", Validators.required],
  });

  cidadeFormGroup = this.fb.group({
    cidadeId: ["", Validators.required],
    estadoId: ["", Validators.required],
  });
  clienteFormGroup = this.fb.group({
    clienteId: ["", Validators.required],
  });
  funcionarioFormGroup = this.fb.group({
    funcionariosId: [[], Validators.required],
  });

  resetForm() {
    this.obraFormGroup.reset();
    this.cidadeFormGroup.reset();
    this.clienteFormGroup.reset();
    this.funcionarioFormGroup.reset();
  }

  salvar() {
    const data = {
      ...this.obraFormGroup.value,
      ...this.cidadeFormGroup.value,
      ...this.clienteFormGroup.value,
      ...this.funcionarioFormGroup.value,
    };
    console.log("data", data);

    this.service.create(data).subscribe((s) => {
      console.log(s);
      this.resetForm();
    });
  }

  ngOnInit(): void {}
}
