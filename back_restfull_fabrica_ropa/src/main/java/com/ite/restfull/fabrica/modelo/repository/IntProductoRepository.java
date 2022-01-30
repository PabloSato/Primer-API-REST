package com.ite.restfull.fabrica.modelo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ite.restfull.fabrica.modelo.entitybeans.Producto;

public interface IntProductoRepository extends JpaRepository<Producto, Integer>{

	@Query("SELECT p FROM Producto p WHERE p.familia.idFamilia = ?1")
	public List<Producto> findByFamilia(int idFamilia);
	
}
