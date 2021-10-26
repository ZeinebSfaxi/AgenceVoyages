From openjdk:15
EXPOSE 8089
ADD /target/ReservationVol-Service-1.2-SNAPSHOT.jar docker-service-reservationVol.jar
ENTRYPOINT ["java","-jar","docker-service-reservationVol.jar"]



# Build stage
#
#FROM maven:3.6.0-jdk-11-slim AS build
#COPY src /home/app/src
#COPY pom.xml /home/app
#RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
#FROM openjdk:15
#COPY --from=build /home/app/target/ReservationVol-Service-1.2-SNAPSHOT.jar /usr/local/lib/demo.jar
#ENTRYPOINT ["java","-jar","/usr/local/lib/demo.jar"]