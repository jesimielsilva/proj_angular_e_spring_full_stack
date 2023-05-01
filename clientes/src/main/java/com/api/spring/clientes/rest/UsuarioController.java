package com.api.spring.clientes.rest;

import com.api.spring.clientes.model.entity.UsuarioModel;
import com.api.spring.clientes.model.repository.UsuarioRepository;
import com.api.spring.clientes.services.UsuarioDetailsSerivceImpl;
import com.api.spring.clientes.util.UsuarioCadastradoException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario")
public class UsuarioController {

    private final UsuarioRepository repository;

   private final UsuarioDetailsSerivceImpl serivce;

    private final PasswordEncoder encoder;


    public UsuarioController(UsuarioRepository repository, UsuarioDetailsSerivceImpl serivce, PasswordEncoder encoder) {
        this.repository = repository;
        this.serivce = serivce;
        this.encoder = encoder;
    }

    @GetMapping
    public ResponseEntity<List<UsuarioModel>> listarTodos(){
        return ResponseEntity.ok(repository.findAll());
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<UsuarioModel> salvarUser(@RequestBody @Valid UsuarioModel usuarioModel){
        usuarioModel.setPassword(encoder.encode(usuarioModel.getPassword()));
        try {
            UsuarioModel usuarioSalvo = serivce.salvar(usuarioModel);
            return ResponseEntity.ok(usuarioSalvo);
        } catch (UsuarioCadastradoException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
        //return ResponseEntity.ok(serivce.salvar(usuarioModel));
    }

    @GetMapping("/validar-Senha")
    public ResponseEntity<Boolean> validarSenha(@RequestParam String username,
                                                @RequestParam String password){
        Optional<UsuarioModel> optUsuario = repository.findByUsername(username);
        if (optUsuario.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
        }

        UsuarioModel usuarioModel = optUsuario.get();
        boolean valid = encoder.matches(password, usuarioModel.getPassword());

        HttpStatus status = (valid) ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return ResponseEntity.status(status).body(valid);

    }

}
