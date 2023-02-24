package com.api.spring.clientes.util;

import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class BigDecimalConverter{
    public BigDecimal converter(String value){
        if(value == null){
            return null;
        }
        value = value.replace(".", "").replace(",", ".");
        return new BigDecimal(value);
    }

//    public static BigDecimal converter(String value) {
//        // Verifica se o valor recebido é nulo
//        if (value == null) {
//            return null;
//        }
//        // Substitui a vírgula pelo ponto
//        String valorConvertido = value.replace(",", ".");
//        // Converte a String para BigDecimal
//        return new BigDecimal(valorConvertido);
//    }

}
