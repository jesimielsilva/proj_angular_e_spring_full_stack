package com.api.spring.clientes.model.repository;

import com.api.spring.clientes.model.entity.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Integer> {

    public Optional<UsuarioModel> findByUsername(String username);

    boolean existsByUsername(String username);
}
