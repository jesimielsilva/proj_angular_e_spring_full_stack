import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from './login/usuarioModel';
import { Observable, buffer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiURLBase + "/api/usuarios";
  
  tokenURL: string = environment.apiURLBase + environment.obeterTokenUrl;

  clientID: string = environment.clientId;
  clientSecret: string = environment.clientSecret;  

  constructor(
    private http: HttpClient
  ) { }

  salvar(UsuarioModel: UsuarioModel) : Observable<any>{
    return this.http.post<any>(this.apiUrl, UsuarioModel);
  }

  tentarLogar(username: string, password: string): Observable<any> {    
    const params = new HttpParams()
                          .set('username', username)
                          .set('password', password)
                          .set('grant_type', 'password')
    const headers = {
      'Authorization' : 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenURL, params.toString(), { headers });
  }


}
