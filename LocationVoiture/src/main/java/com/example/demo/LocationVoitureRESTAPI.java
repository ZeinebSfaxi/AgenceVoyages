package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LocationVoitureRESTAPI {
private String title="Hello";
	
	@RequestMapping("/hello") //path mte37ha
	public String sayHello() {
		System.out.println(title);
		return title;
	}
}
