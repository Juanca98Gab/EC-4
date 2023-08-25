package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final VideojuegoRepository repositoryI;

;

	@Autowired
	public DatabaseLoader(
		VideojuegoRepository repositoryI

		) {
		this.repositoryI = repositoryI;

	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Videojuego("Dota", "Moba", "la coordinacion es clave"));
		this.repositoryI.save(new Videojuego("Csgo","Shooter","un juegos de disparos en primera persona"));
		this.repositoryI.save(new Videojuego("Warcraft3","Estrategia","estrategia en tiempo real"));
		Videojuego iPlantsvsZombies = new Videojuego("PlantsvsZombies","Estrategia","estrategia en tiempo real");
		this.repositoryI.save(iPlantsvsZombies);
		Videojuego iSc2 = new Videojuego("Sc2","Estrategia", "estrategia pura y dura");
		this.repositoryI.save(iSc2);
		this.repositoryI.save(new Videojuego("Metal Slug","Accion","un juego antiguo pero muy bueno"));



	}
}