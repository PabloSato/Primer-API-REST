package com.ite.restfull.fabrica.modelo.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ite.restfull.fabrica.modelo.entitybeans.Familia;
import com.ite.restfull.fabrica.modelo.repository.IntFamiliaRepository;

@Service
public class FamiliaDaoImpl implements IntFamiliaDao {

	@Autowired
	private IntFamiliaRepository ifam;

	@Override
	public List<Familia> findAll() {

		return ifam.findAll();
	}

	@Override
	public Familia findById(int idFamilia) {

		return ifam.findById(idFamilia).orElse(null);
	}

	@Override
	public int insertOne(Familia familia) {
		if (findById(familia.getIdFamilia()) == null) {
			ifam.save(familia);
			return 1;
		} else {
			return 0;
		}
	}

	@Override
	public int updateOne(Familia familia) {
		if (findById(familia.getIdFamilia()) != null) {
			ifam.save(familia);
			return 1;
		} else {
			return 0;
		}
	}

	@Override
	public int deleteOne(int idFamilia) {
		if (findById(idFamilia) != null) {
			ifam.deleteById(idFamilia);
			return 1;
		} else {
			return 0;
		}
	}

}
