import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(this.url + '/user/signup', novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    return this.httpClient.get(`${this.url}/user/exists/´${nomeUsuario}`);
  }
}
