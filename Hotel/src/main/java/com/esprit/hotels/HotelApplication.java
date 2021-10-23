package com.esprit.hotels;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

import java.text.ParseException;
import java.text.SimpleDateFormat;


@SpringBootApplication
@EnableEurekaClient
public class HotelApplication {

	public static void main(String[] args) {
		SpringApplication.run(HotelApplication.class, args);
	}

	@Autowired
	private HotelRepository repository;
	
	@Bean
	ApplicationRunner init() throws ParseException {
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		 Date d = dateFormat.parse("2019-06-12");
		
		return (args) -> {
			
			// save
			repository.save(new Hotel("Mouradi", "112 avenue de la liberte Hamamet", d, d, "Gadour", "Jerbi", "1234567"));
			repository.save(new Hotel("Royal", "112 avenue de la liberte Hamamet", d, d, "Achraf", "Mohsen", "01234567"));
		
			// fetch
			repository.findAll().forEach(System.out::println);

		};
	}
}
