require('dotenv').config();
var axios = require('axios');
var prompt = require('prompt-sync')();

var kuna_api_url  = process.env.KUNA_API_URL;
var axios = require('axios');

var kunacode = prompt('Get me kuna code:');

var data = JSON.stringify({
  "code": kunacode
});

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `http://${kuna_api_url}/api/kuna/kunacodeactivate`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
