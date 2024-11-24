import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioCadastroUsuarioService {

  cadastroForm: FormGroup | null = null;

  getCadastro(): FormGroup | null{
    return this.cadastroForm;
  }

  setCadastro(form: FormGroup) {
    this.cadastroForm = form;
  }

}
