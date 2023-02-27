import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-service-prestado-form',
  templateUrl: './service-prestado-form.component.html',
  styleUrls: ['./service-prestado-form.component.css']
})
export class ServicePrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico!: ServicoPrestado;

  constructor(
    private clienteService: ClientesService
  ) {
    this.servico = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    console.log(this.servico);
  }

}
