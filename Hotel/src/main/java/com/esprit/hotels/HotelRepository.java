package com.esprit.hotels;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;



public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	@Query("select h from Hotel h where h.nomHotel like :nomHotel")
	public Page<Hotel> hotelByNom(@Param("nomHotel") String n, Pageable pageable);
}
