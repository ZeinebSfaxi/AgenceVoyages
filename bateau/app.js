const express = require('express')
const app = express()
const bateau = require('./models/bateau')
const connectDatabase = require('./config/database')
const dotenv = require('dotenv')
const bateauController = require('./controllers/bateauController');
const Eureka = require('eureka-js-client').Eureka;



dotenv.config()
connectDatabase()

app.listen(3005, () =>
  console.log('Application Started Working' )
)
app.use(express.json())
app.use("/api",bateauController);

const client = new Eureka({
    instance: {
      instanceId:'bateau',

      app: 'bateau',
      hostName: 'bateau',
      statusPageUrl:'http://localhost:3005',
      ipAddr: '0.0.0.0 ',
      port: {
        '$': 3005,
        '@enabled': 'true',
      },
      vipAddress: 'bateau',
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
      registerWithEureka:true,
      fetchRegistry:true,
    },
    eureka: {
        
        
        // eureka server host / port
        /*serviceUrls: {
          default: [
            'http://discovery:8761/eureka/apps',
            
          ]
        },*/
        host:'discovery',
        port:8761,
        servicePath: '/eureka/apps/'
      },
  });

  client.start()
