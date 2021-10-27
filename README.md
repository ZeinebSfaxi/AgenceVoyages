# AgenceVoyages - Documentation

This repo is composed of:
  - 3 different spring boot with h2 database microservices: Hotel / ReservationVol-Service  / Location Voiture 
  - 1 Node.ja microservice: bateau
  - 1 microservice dedicated to the config-server
  - 1 microservice dedicated to the discovery-server
  - 1 microservice dedicated to the gateway-server
  - 1 file where you'll have all the docker compose needs: docker-compose-agenceboard
  - 1 front-end part: front_agence_voyage

the 4 different microservices (Hotel, ReservationVol, locationVoiture, Bateau ) each one running on a different initially have been dockerized.
the discovery-server (eureka) will then be able to discover every single one of them.
the gateway-server will be able to serve as an entry and exit point for a network as all data must pass through or communicate with the gateway prior to being routed.
with microservices, we create a central config server (config-server) where all configurable parameters of micro-services are written version controlled. The benefit of a central config server is that if we change a property for a microservice, it can reflect that on the fly without redeploying the microservice.
with the docker-compose-agenceboard you'll have the .yml file that will provide the configuration necessary to run the docker-compose commands. This will make it an easier process as in we won't have to run every microservice on it's own and run every single docker image to have an output.
And finally the front part (front_Agence_voyage) developped using React.js is connected to the backend part using the proxy localhost:8762 (resulted while making the gateway). We can see the results fetched depending on the request sent. The front is an admin page allowing it to track different reservations made by clients. 

# AgenceVoyages - How to Run

 ****************** only Backend projects ******************

step1:
to start clone the git repo in your chosen file
git clone "https://github.com/ZeinebSfaxi/AgenceVoyages.git"

step2: 
open your chosen ide and import all the microservices
do a maven update on every microservice to install missing dependencies
then run mvn clean install on every single project to clean your ./target and generate a .jar

step3:
run your docker desktop.

step4:
open (your path)/docker-compose-agenceboard in the cmd
and run docker-compose up -d --build --force-recreate

 ****************** FRONTEND PROJECT ******************

open the ./front_agence_voyage folder and run these following commands:
npm install
npm start
(if it asks you to choose another port say y and enter)

a localhost tab will open in your browser


 ****************** WELCOME TO TRAVELBEA :D ******************

