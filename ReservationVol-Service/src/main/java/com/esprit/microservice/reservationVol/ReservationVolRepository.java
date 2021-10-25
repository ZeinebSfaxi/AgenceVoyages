package com.esprit.microservice.reservationVol;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface ReservationVolRepository extends JpaRepository<ReservationVol, Integer>{
	
	@Query("select r from ReservationVol r where r.nom like :nom")
	public Page<ReservationVol> reservationVolByNom(@Param("nom") String n, Pageable pageable);
	
	
	
	@Query("select r from ReservationVol r where r.pays like :pays")
	public Page<ReservationVol> reservationVolByPays(@Param("pays") String p, Pageable pageable);
	
	
	@Query("select r from ReservationVol r where r.hotelId like :hotelId")
	public Page<ReservationVol> reservationVolByHotelId(@Param("hotelId") int hotelId, Pageable pageable);
}
