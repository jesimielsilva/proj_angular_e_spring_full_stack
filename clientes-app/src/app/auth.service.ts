import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './login/usuarioModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiURLBase + "/api/usuario/cadastrar"

  constructor(
    private http: HttpClient
  ) { }

  salvar(UsuarioModel: UsuarioModel) : Observable<any>{
    return this.http.post<any>(this.apiUrl, UsuarioModel);
  }

}
