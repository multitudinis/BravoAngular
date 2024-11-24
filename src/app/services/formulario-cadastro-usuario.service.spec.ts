import { TestBed } from '@angular/core/testing';

import { FormularioCadastroUsuarioService } from './formulario-cadastro-usuario.service';

describe('FormularioCadastroUsuarioService', () => {
  let service: FormularioCadastroUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioCadastroUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
