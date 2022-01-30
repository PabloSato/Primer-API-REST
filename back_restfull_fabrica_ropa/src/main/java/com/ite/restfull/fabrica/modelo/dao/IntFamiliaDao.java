package com.ite.restfull.fabrica.modelo.dao;

import java.util.List;

import com.ite.restfull.fabrica.modelo.entitybeans.Familia;

public interface IntFamiliaDao {

	List<Familia> findAll();
	Familia findById(int idFamilia);
	int insertOne(Familia familia);
	int updateOne(Familia familia);
	int deleteOne(int idFamilia);
	
}
