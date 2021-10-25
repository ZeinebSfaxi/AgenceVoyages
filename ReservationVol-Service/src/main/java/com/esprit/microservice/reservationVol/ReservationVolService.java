package com.esprit.microservice.reservationVol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ReservationVolService {

	@Autowired
	private ReservationVolRepository reservationRep;

	public ResponseEntity<ReservationVol> addReservation(ReservationVol reservation) {
		reservationRep.save(reservation);
		return new ResponseEntity<ReservationVol>(reservation, HttpStatus.OK);
	}

	public ResponseEntity<ReservationVol> updateReservation(int id, ReservationVol newReservation) {
		if (reservationRep.findById(id).isPresent()) {
			ReservationVol reservation = reservationRep.findById(id).get();
			reservation.setNom(newReservation.getNom());
			reservation.setPrenom(newReservation.getPrenom());
			reservation.setEmail(newReservation.getEmail());
			reservation.setCin(newReservation.getCin());
			reservation.setPays(newReservation.getPays());
			reservation.setDateDebut(newReservation.getDateDebut());
			reservation.setDateFin(newReservation.getDateFin());
			reservation.setNbPersonne(newReservation.getNbPersonne());
			reservation.setHotelId(newReservation.getId());

			reservationRep.save(reservation);
			return new ResponseEntity<ReservationVol>(reservation, HttpStatus.OK);

		} else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ReservationVol> deleteReservation(int id) {
		if (reservationRep.findById(id).isPresent()) {
			reservationRep.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);

		} else {

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
