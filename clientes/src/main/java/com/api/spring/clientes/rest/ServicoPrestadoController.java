package com.api.spring.clientes.rest;


import com.api.spring.clientes.model.entity.Cliente;
import com.api.spring.clientes.model.entity.ServicoPrestado;
import com.api.spring.clientes.model.repository.ClienteRepository;
import com.api.spring.clientes.model.repository.ServicoPrestadpRepository;
import com.api.spring.clientes.rest.dto.ServicoPrestadoDTO;
import com.api.spring.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoPrestadpRepository repository;
    private final BigDecimalConverter bigDecimalConverter;



    @PostMapping
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto){
        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idCliente = dto.getIdCliente();

        Cliente cliente = clienteRepository
                .findById(idCliente)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        ServicoPrestado servicoPrestado =  new ServicoPrestado();
        servicoPrestado.setDescricao(dto.getDescricao());
        servicoPrestado.setData(data);
        servicoPrestado.setCliente(cliente);
        servicoPrestado.setValor(bigDecimalConverter.converter(dto.getPreco()));

        return repository.save(servicoPrestado);
    }

    @GetMapping
    public List<ServicoPrestado> pesquisar(
            @RequestParam(value = "nome", required = false) String nome,
            @RequestParam(value = "mes", required = false) Integer mes
    ){

        return repository.findByNomeClienteAndMes("%" + nome + "%", mes);

    }

}
