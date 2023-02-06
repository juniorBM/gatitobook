import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

const API = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.httpClient.post(API + '/user/signup', novoUsuario);
  }

  verificarUsuarioExistente(nomeUsuario: string) {
    return this.httpClient.get(`${API}/user/exists/´${nomeUsuario}`);
  }
}
