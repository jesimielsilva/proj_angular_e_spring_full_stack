import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicoPrestado } from './service-prestado/servicoPrestado';
import { environment } from '../environments/environment';
import { ServicoPrestadoBusca } from './service-prestado/service-prestado-list/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadosService {

  apiURLBase: string = environment.apiURLBase + '/api/servicos-prestados';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado) : Observable<ServicoPrestado>{
    return this.http.post<ServicoPrestado>(`${this.apiURLBase}`, servicoPrestado);
  }

  buscar(nome: string, mes: number) : Observable<ServicoPrestadoBusca[]> {
    
    const httpParams = new HttpParams()
    .set("nome", nome)
    .set("mes", mes ? mes.toString() : '');     
    
    const url = this.apiURLBase + "?" + httpParams.toString();    
    return this.http.get<any>(url);

  }
}
