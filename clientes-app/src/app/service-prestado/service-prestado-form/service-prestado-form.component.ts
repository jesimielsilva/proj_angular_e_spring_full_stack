import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-service-prestado-form',
  templateUrl: './service-prestado-form.component.html',
  styleUrls: ['./service-prestado-form.component.css']
})
export class ServicePrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClientesService
  ) { }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe(response => this.clientes = response);
  }

  onSubmit(){
    console.log("ok submit");
  }

}
