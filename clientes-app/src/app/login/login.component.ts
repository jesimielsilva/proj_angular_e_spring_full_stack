import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsuarioModel } from './usuarioModel';
import { error } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  errors!: String[];
  mensagemSucesso!: string;
  success: boolean = false;
  cadastrando!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { 

  }

  onSubmit(){
    this.authService
          .tentarLogar(this.username, this.password)
          .subscribe(response => {
            console.log(response)
            this.router.navigate(['/home'])
          }, errorResponse => {
            this.errors = ['Usuário e/ou senha incorretos.']
          });    
  }

  preparaCadastrar(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastro(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuarioModel: UsuarioModel = new UsuarioModel();
    usuarioModel.username = this.username;
    usuarioModel.password = this.password;
    this.authService
        .salvar(usuarioModel)
        .subscribe(response =>{
          this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login."; 
          this.cadastrando = false;
          this.username = '';
          this.password = '';
          this.errors = [];         
        }, errorResponse => {
          this.mensagemSucesso = '';           
          this.errors = errorResponse.error.errors;
        })
  }

}
