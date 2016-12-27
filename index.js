let express = require('express');
let dotenv = require('dotenv');

let configFile = '';

if(process.env.NODE_ENV == 'test'){
  configFile = '/configs/.env.test';
  dotenv.load({path: configFile});
}
else if (process.NODE_ENV == 'devs') {
  configFile = '/configs/.env.devs';
  dotenv.load({path: configFile});

}
else if (process.NODE_ENV == 'live'){
  //In prod, just use environment variables provided by Travis CI
}
