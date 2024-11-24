import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from 'src/app/services/cadastro-usuario.service';
import { FormularioCadastroUsuarioService } from 'src/app/services/formulario-cadastro-usuario.service';
import { PessoaUsuaria } from 'src/app/types/type';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroUsuarioComponent {
  constructor(
    private formularioService: FormularioCadastroUsuarioService,
    private cadastroService: CadastroUsuarioService,
    private router: Router
  ) { }

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuaria;
      console.log(novoCadastro)
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {
          console.log('Cadastro realizado com sucesso', value);
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.log('Erro ao realizar cadastro', err)
        }
      });
    }
  }
}
