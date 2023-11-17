//http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/all-emails/
/*
s011111@student.tu.kielce.pl
  s022222@student.tu.kielce.pl
  a.kowalski@tu.kiece.pl
  p.fraczek@tu.kiece.pl
*/
const axios = require('axios');
const fs = require('fs');

async function fetchDataFromUserAPI(url, emailUser) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Błąd podczas pobierania danych: ', error);
        return null;
    }
}

function appendDataToFile(data, filepath) {
    const formattedData = JSON.stringify(data, null, 2) + '\n\n';
    fs.appendFileSync(filepath, formattedData, 'utf8');
}


const emailUser = 's022222@student.tu.kielce.pl';
const apiURL = `http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/user/${emailUser}`;

fetchDataFromUserAPI(apiURL, emailUser)
    .then(data => {
        if (data) {
            appendDataToFile(data, 'dataTest.txt'); 
            console.log('Dane zostały zapisane.');
        }
    });

    module.exports = fetchDataFromUserAPI;