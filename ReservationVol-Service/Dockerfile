From openjdk:15
EXPOSE 8089
ADD /target/ReservationVol-Service-1.2-SNAPSHOT.jar docker-service-reservationVol.jar
ENTRYPOINT ["java","-jar","docker-service-reservationVol.jar"]