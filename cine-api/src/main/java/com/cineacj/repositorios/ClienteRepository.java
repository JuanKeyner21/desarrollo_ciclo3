package com.cineacj.repositorios;

import com.cineacj.modelos.Cliente;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends CrudRepository<Cliente, Long>{
    
    @Query(value =  "SELECT * FROM clientes WHERE usuario=?1 AND password=?2", nativeQuery = true)
    public Cliente validar(String usuario, String password);
    
}
