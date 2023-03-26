import { Component, OnInit } from '@angular/core';
import { ServicoPrestadosService } from '../../servico-prestados.service';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';

@Component({
  selector: 'app-service-prestado-list',
  templateUrl: './service-prestado-list.component.html',
  styleUrls: ['./service-prestado-list.component.css']
})
export class ServicePrestadoListComponent implements OnInit {

  nome!: string;
  mes!: number;
  meses: number[];
  lista!: ServicoPrestadoBusca[];
  message!: string;

  constructor(
    private service: ServicoPrestadosService
  ) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   }

  ngOnInit(): void {
  }

  consultar(){
    this.service.buscar(this.nome, this.mes)
    .subscribe(response => {
      this.lista = response;
      if(this.lista.length <= 0){
        this.message = "Nenhum Registro Encontrado.";
      }else{
        this.message = '';
      }
    });
  }

}
