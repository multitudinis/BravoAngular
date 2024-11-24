import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

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

  funcionarioFormGroup = this.fb.group({
    nome: ["", Validators.required],
    cpf: ["", Validators.required],
    sobrenome: ["", Validators.required],
    apelido: ["", Validators.required],
    email: ["", Validators.required],
    empresa: ["", Validators.required],
    cargo: ["", Validators.required],
  });

  resetForm() {
    this.funcionarioFormGroup.reset();
    this.cidadeFormGroup.reset();
  }

  salvar() {
    const data = {
      ...this.funcionarioFormGroup.value,
      ...this.cidadeFormGroup.value,
      ...this.enderecoFormGroup.value,
    };
  }

  ngOnInit(): void {}
}
