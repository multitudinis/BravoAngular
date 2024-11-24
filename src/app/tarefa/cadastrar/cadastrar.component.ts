import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.scss"],
})
export class CadastrarComponent implements OnInit {
  isLinear = true;

  constructor(private fb: FormBuilder) {}

  optionsObra = [
    { value: "1", viewValue: "Apartamento do zezinho" },
    { value: "2", viewValue: "Casa da josefa" },
    { value: "3", viewValue: "Escola sao benedito" },
  ];
  optionsColaboradores = [
    { value: "1", viewValue: "Adriano" },
    { value: "2", viewValue: "Andre" },
    { value: "3", viewValue: "Fabiano" },
  ];

  tarefaFormGroup = this.fb.group({
    descricaoSintetica: ["", Validators.required],
    descricaoAnalitica: ["", Validators.required],
    recorrencia: ["", Validators.required],
    dataInicio: ["", Validators.required],
    dataTermino: ["", Validators.required],
  });
  obraFormGroup = this.fb.group({
    id: ["", Validators.required],
  });
  colaboradorFormGroup = this.fb.group({
    executor: ["", Validators.required],
    delegador: ["", Validators.required],
    coordenador: ["", Validators.required],
    agenteFinal: ["", Validators.required],
  });

  ngOnInit(): void {}
}
