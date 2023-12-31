package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "videojuegos", path = "videojuegos")
public interface VideojuegoRepository extends CrudRepository<Videojuego, Long> {
    
}
