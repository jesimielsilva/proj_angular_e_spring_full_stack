import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadosService } from 'src/app/servico-prestados.service';

@Component({
  selector: 'app-service-prestado-form',
  templateUrl: './service-prestado-form.component.html',
  styleUrls: ['./service-prestado-form.component.css']
})
export class ServicePrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico!: ServicoPrestado;
  success: boolean = false;
  errors: String[] = [];

  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadosService
  ) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    this.service
      .salvar(this.servico)
      .subscribe(response => {
        this.success = true;
        this.errors = [];
        this.servico = new ServicoPrestado();          
      } , errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
  }

  

}
