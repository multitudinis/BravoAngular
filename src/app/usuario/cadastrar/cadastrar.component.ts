import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { UsuarioService } from "src/app/services/usuario.service";

@Component({
  selector: "app-cadastrar",
  templateUrl: "./cadastrar.component.html",
  styleUrls: ["./cadastrar.component.scss"],
  providers: [ConfirmationService, MessageService],
})
export class CadastrarComponent implements OnInit {
  usuarioFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.usuarioFormGroup = this.fb.group({
      nome: ["", Validators.required],
      senha: ["", Validators.required],
      email: ["", Validators.required],
    });
  }

  salvar() {
    this.service.create(this.usuarioFormGroup.value).subscribe((s) => {
      this.messageService.add({
        key: "bc",
        severity: "success",
        summary: "Mensagem",
        detail: `Usuario ${s.email} cadastrado`,
      });
      this.usuarioFormGroup.reset();
    });
  }
}
