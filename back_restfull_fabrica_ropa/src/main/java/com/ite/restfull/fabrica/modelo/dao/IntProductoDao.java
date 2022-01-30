package com.ite.restfull.fabrica.modelo.dao;

import java.util.List;

import com.ite.restfull.fabrica.modelo.entitybeans.Producto;

public interface IntProductoDao {

	List<Producto> findAll();
	List<Producto> findByFamilia(int idFamilia);
	Producto findById(int idProducto);
	int inertOne(Producto producto);
	int updateOne(Producto producto);
	int deleteOne(int idProducto);
}
