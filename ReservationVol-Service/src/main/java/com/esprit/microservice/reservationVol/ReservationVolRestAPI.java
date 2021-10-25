package com.esprit.microservice.reservationVol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/reservationVols")
public class ReservationVolRestAPI {

	@Autowired
	private ReservationVolService reservationService;

	private String title = " test microservice";

	@RequestMapping("/hello")
	private String sayHello() {

		return title;
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<ReservationVol> createReservationVol(@RequestBody ReservationVol reservationVol) {
		return reservationService.addReservation(reservationVol);
	}

	@PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<ReservationVol> updateReservationVol(@PathVariable(value = "id") int id,
			@RequestBody ReservationVol reservationVol) {
		return reservationService.updateReservation(id, reservationVol);
	}

	@DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public ResponseEntity<ReservationVol> deleteReservationVol(@PathVariable(value = "id") int id) {
		return reservationService.deleteReservation(id);
	}

}
