FROM openjdk:15
EXPOSE 8080
ADD /target/LocationVoiture-0.0.1-SNAPSHOT.jar locationvoiture-service.jar
ENTRYPOINT ["java", "-jar", "locationvoiture-service.jar"]