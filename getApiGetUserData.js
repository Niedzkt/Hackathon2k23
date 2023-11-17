//http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/all-emails/
/*
s011111@student.tu.kielce.pl
  s022222@student.tu.kielce.pl
  a.kowalski@tu.kiece.pl
  p.fraczek@tu.kiece.pl
*/
const axios = require('axios');

async function fetchDataFromUserAPI(url, emailUser) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
    }
}
const emailUser = 's022222@student.tu.kielce.pl';
const apiURL = `http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/user/${emailUser}`;
fetchDataFromUserAPI(apiURL, emailUser);