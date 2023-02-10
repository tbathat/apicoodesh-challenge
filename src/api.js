const axios = require("axios");

const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/'
});

module.exports = api;