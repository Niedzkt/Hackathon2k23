//http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/all-emails/


const axios = require('axios');

async function fetchDataFromAPI(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
    }
}
const apiURL = 'http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/all-emails/';
fetchDataFromAPI(apiURL);