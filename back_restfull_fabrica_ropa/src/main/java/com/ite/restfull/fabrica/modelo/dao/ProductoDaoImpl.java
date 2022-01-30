package com.ite.restfull.fabrica.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ite.restfull.fabrica.modelo.entitybeans.Producto;
import com.ite.restfull.fabrica.modelo.repository.IntProductoRepository;

@Service
public class ProductoDaoImpl implements IntProductoDao {

	@Autowired
	private IntProductoRepository iprod;

	@Override
	public List<Producto> findAll() {

		return iprod.findAll();
	}

	@Override
	public List<Producto> findByFamilia(int idFamilia) {

		return iprod.findByFamilia(idFamilia);
	}

	@Override
	public Producto findById(int idProducto) {

		return iprod.findById(idProducto).orElse(null);
	}

	@Override
	public int inertOne(Producto producto) {
		if (findById(producto.getIdProducto()) == null) {
			iprod.save(producto);
			return 1;
		} else
			return 0;
	}

	@Override
	public int updateOne(Producto producto) {
		if (findById(producto.getIdProducto()) != null) {
			iprod.save(producto);
			return 1;
		} else
			return 0;
	}

	@Override
	public int deleteOne(int idProducto) {
		if (findById(idProducto) != null) {
			iprod.deleteById(idProducto);
			return 1;
		} else
			return 0;
	}

}
