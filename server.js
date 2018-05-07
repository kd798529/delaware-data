const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const server = express();

server.get('/data', (req, res) =>{
	res.status(201).json(deData);
})
const deData = axios.get('https://data.delaware.gov/resource/8u9e-kp5g.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


const port = process.env.PORT || 5050;

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})