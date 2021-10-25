package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
public interface LocationVoitureRepo extends JpaRepository<LocationVoiture, Integer>
  {
	@Query("select h from LocationVoiture h where h.matricule like :matricule")
	public Page<LocationVoiture> hotelByNom(@Param("matricule") String n, Pageable pageable);
}
