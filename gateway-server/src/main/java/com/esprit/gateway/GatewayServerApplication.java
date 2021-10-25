package com.esprit.gateway;

import org.apache.http.protocol.HTTP;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.core.userdetails.MapReactiveUserDetailsService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.server.SecurityWebFilterChain;

import com.ctc.wstx.shaded.msv_core.verifier.jarv.Const;

@SpringBootApplication
@EnableEurekaClient

public class GatewayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServerApplication.class, args);
	}

	@Bean
	DiscoveryClientRouteDefinitionLocator dynamicRoutes(ReactiveDiscoveryClient rdc, DiscoveryLocatorProperties dlp) {

		return new DiscoveryClientRouteDefinitionLocator(rdc, dlp);
	}

	@Bean
	SecurityWebFilterChain authorization(ServerHttpSecurity http) {

		final String reservationApi = "/reservation/api/reservationVols/**";
		return http.httpBasic(Customizer.withDefaults()).csrf(ServerHttpSecurity.CsrfSpec::disable)
				.authorizeExchange(ae -> ae.pathMatchers(HttpMethod.POST, reservationApi).authenticated()
						.pathMatchers(HttpMethod.PUT, reservationApi).authenticated()
						.pathMatchers(HttpMethod.DELETE, reservationApi).authenticated().anyExchange().permitAll())
				.build();
	}

	@Bean
	MapReactiveUserDetailsService authentication() {
		return new MapReactiveUserDetailsService(
				User.withDefaultPasswordEncoder().username("test").password("test").roles("USER").build());

	}

	// @Bean
	// RouteLocator gateway(RouteLocatorBuilder rlb) {
	// return rlb
	// .routes()
	// .route(rs -> rs.path("/RESERVATION/**").filters(fs -> fs.retry(10))
	// .uri("lb://RESERVATION"))
	// .build();

	// }

	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(r -> r.path("/reservation/**")
				// Pre and Post Filters provided by Spring Cloud Gateway
						.filters(f -> f.addRequestHeader("first-request", "first-request-header")
						.addResponseHeader("first-response", "first-response-header").stripPrefix(1))
						.uri("lb://RESERVATION"))
				.route((r -> r.path("/hotel/**")
						.filters(f -> f.addRequestHeader("second-request", "second-request-header")
						.addResponseHeader("second-response", "second-response-header").stripPrefix(1))
						.uri("lb://HOTEL-SERVICE")))
				
				.build();

	}

}
