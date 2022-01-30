package com.ite.restfull.fabrica.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ite.restfull.fabrica.modelo.dao.IntProductoDao;
import com.ite.restfull.fabrica.modelo.entitybeans.Producto;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("rest/productos")
public class ProductoRestController {

	@Autowired
	private IntProductoDao iprod;

	@GetMapping("/todos")
	public List<Producto> verTodas() {
		return iprod.findAll();
	}

	@GetMapping("/verUno/{id}")
	public Producto verUno(@PathVariable("id") int idProducto) {
		return iprod.findById(idProducto);
	}

	@PostMapping("/alta")
	public String postAlta(@RequestBody Producto producto) {
		return (iprod.inertOne(producto) == 1) ? "Alta realizada" : "Alta NO realizada";
	}

	@PutMapping("/modificar")
	public String putProducto(@RequestBody Producto producto) {
		return (iprod.updateOne(producto) == 1) ? "Producto modificado" : "Producto NO modificado";
	}

	@DeleteMapping("/eliminar/{id}")
	public String delProducto(@PathVariable("id") int idProducto) {
		return (iprod.deleteOne(idProducto) == 1) ? "Producto eliminado" : "Producto NO eliminado";
	}
}
