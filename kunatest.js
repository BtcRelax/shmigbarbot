require('dotenv').config();
var axios = require('axios');
var kuna_api_url  = process.env.KUNA_API_URL;

var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://${kuna_api_url}/api/kuna/getbalance`,
        headers: { }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
