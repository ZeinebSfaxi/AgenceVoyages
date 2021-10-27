package com.esprit.microservice.reservationVol;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;



@SpringBootApplication
@EnableEurekaClient
public class ReservationVolServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservationVolServiceApplication.class, args);
	}
	
	
	

}
