
var axios = require("axios").default;

class Country {
    // Constructs a country object
    // id - the country id
    // name - the country name (ex: Romania)
    // continent - the continent of the country (ex: Europe)
    // letter2 - the two letter code of the country (ex: RO)
    // letter3 - the three letter code of the country (ex: ROU)
    constructor(name, letter3) {
        this.name = name;
        this.letter3 = letter3;
    }
}

function getCountries() {
    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries-name-ordered',
        headers: {
          'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
          'x-rapidapi-key': 'f0a832f4c6msh2575864cf1009f3p1adc52jsnf962051ca640'
        }
      };

    return axios.request(options).then(function (response) {
        return response.data.map((country) => {
            return new Country(
                country["Country"],
                country["ThreeLetterSymbol"])
        });
    }).catch(function (error) {
        console.error(error);
    });
}



export {getCountries, Country};