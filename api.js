const axios = require('axios').default;

const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/documentation#/Article/get_v3_articles'
});

module.exports = api;