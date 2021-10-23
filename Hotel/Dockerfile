FROM openjdk:8
EXPOSE 8080
ADD /target/Hotel-0.0.1-SNAPSHOT.jar hotel-service.jar
ENTRYPOINT ["java", "-jar", "hotel-service.jar"]