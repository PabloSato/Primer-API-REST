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

import com.ite.restfull.fabrica.modelo.dao.IntFamiliaDao;
import com.ite.restfull.fabrica.modelo.entitybeans.Familia;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/rest/familias")
public class FamiliaRestController {

	@Autowired
	private IntFamiliaDao ifam;

	@GetMapping("/todas")
	public List<Familia> verTodas() {
		return ifam.findAll();
	}

	@GetMapping("/verUna/{id}")
	public Familia verUna(@PathVariable("id") int idFamilia) {
		return ifam.findById(idFamilia);
	}

	@PostMapping("/alta")
	public String postAlta(@RequestBody Familia familia) {
		return (ifam.insertOne(familia) == 1) ? "Alta realizada" : "Alta NO realizada";
	}

	@PutMapping("/modificar")
	public String putFamilia(@RequestBody Familia familia) {
		return (ifam.updateOne(familia) == 1) ? "Familia modificada" : "Familia NO modificada";
	}

	@DeleteMapping("/eliminar/{id}")
	public String delFamilia(@PathVariable("id") int idFamilia) {
		return (ifam.deleteOne(idFamilia) == 1) ? "Familia eliminada" : "Familia NO eliminada";
	}
}
