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
  loginError!: boolean;
  mensagemSucesso!: string;
  cadastrando!: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void { 
  }

  onSubmit(){
    this.router.navigate(['/home'])
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
          this.loginError = false;
        }, error => {
          this.loginError = true;
          this.mensagemSucesso = '';          
        })
  }

}
