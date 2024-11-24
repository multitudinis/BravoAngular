import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  data: any;
  ShowFilter = true;
  isSearching = false;

  constructor(private fb: FormBuilder) {}

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

  enderecoFormGroup = this.fb.group({
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
    nome: ["", Validators.required],
    cpf: ["", Validators.required],
    sobrenome: ["", Validators.required],
    apelido: ["", Validators.required],
    email: ["", Validators.required],
  });

  resetForm() {
    this.clienteFormGroup.reset();
    this.cidadeFormGroup.reset();
    this.enderecoFormGroup.reset();
  }

  salvar() {
    const data = {
      ...this.clienteFormGroup.value,
      ...this.cidadeFormGroup.value,
      ...this.enderecoFormGroup.value,
    };
  }

  ngOnInit(): void {}
}
