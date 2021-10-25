package com.example.demo;

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
public class LocationVoitureApplication {

	public static void main(String[] args) {
		SpringApplication.run(LocationVoitureApplication.class, args);
	}
	
	
	@Autowired
	private LocationVoitureRepo repository;
	
	@Bean
	ApplicationRunner init() throws ParseException {
		
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		 Date d = dateFormat.parse("2019-06-12");
		
		return (args) -> {
		
			// save
			repository.save(new LocationVoiture("09624256", "Stormy","Mounir","184 TU 5721","Voiture","Noir", "Opel","Astra",d, d ));
			repository.save(new LocationVoiture("09624696", "Bahri","Rami","63 TU 6969","Voiture","Rose", "MiniCooper","Cooper",d, d ));

		
			// fetch
			repository.findAll().forEach(System.out::println);

		};
	}

}
