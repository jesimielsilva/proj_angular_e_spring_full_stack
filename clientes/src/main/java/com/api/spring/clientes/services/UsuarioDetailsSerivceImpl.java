package com.api.spring.clientes.services;

import com.api.spring.clientes.model.entity.UsuarioModel;
import com.api.spring.clientes.model.repository.UsuarioRepository;
import jakarta.transaction.Transactional;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class UsuarioDetailsSerivceImpl implements UserDetailsService {

    final UsuarioRepository usuarioRepository;

    public UsuarioDetailsSerivceImpl(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UsuarioModel usuarioModel = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with username" + username));
        return new User(usuarioModel.getUsername(), usuarioModel.getPassword(), true, true,
                true, true, usuarioModel.getAuthorities());
    }
}
