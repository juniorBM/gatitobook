import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { Injectable } from '@angular/core';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioExisteService {
  constructor(private novoUsuarioService: NovoUsuarioService) {}
  // switchMap > troca de fluxo
  // map => troca de resultados
  usuarioJaExiste() {
    return (controle: AbstractControl) => {
      return controle.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificarUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
