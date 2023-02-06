import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {Observable, of, take} from 'rxjs';
import { AnimaisService } from '../animais.service';
import { UsuarioService } from '../../autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListaAnimaisResolver implements Resolve<Animais> {
  constructor(
    private animaisService: AnimaisService,
    private usuarioService: UsuarioService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      }),
      take(1)
    );
  }
}