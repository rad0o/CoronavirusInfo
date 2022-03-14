
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
    /// returns a list of available countries
    console.log("Fetching countries...")
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

function getCountryInfo(country) {
    // returns the information of the country with the provided ISO code
    // Country - the country 
    console.log("Fetching info...");
    var options = {
        method: 'GET',
        url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/' + country.name + '/' + country.letter3,
        headers: {
            'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            'x-rapidapi-key': 'f0a832f4c6msh2575864cf1009f3p1adc52jsnf962051ca640'
        }
    };

    return axios.request(options).then(function (response) {
        const res = response.data[0];
        return {
            "Country": res["Country"],
            "Continent": res["Continent"],
            "InfectionRisk": res["Infection_Risk"],
            "CaseFatalityRate": res["Case_Fatality_Rate"],
            "TestPercentage": res["Test_Percentage"],
            "RecoveryProportion": res["Recovery_Proporation"],
            "TotalCases": res["TotalCases"],
            "NewCases": res["NewCases"],
            "TotalDeaths": res["TotalDeaths"],
            "NewDeaths": res["NewDeaths"],
            "TotalRecovered": res["TotalRecovered"],
            "NewRecovered": res["NewRecovered"],
            "ActiveCases": res["ActiveCases"],
            "TotalTests": res["TotalTests"],
            "Population": res["Population"],
            "OneCasePer": res["one_Caseevery_X_ppl"],
            "OneDeathPer": res["one_Deathevery_X_ppl"],
            "OneTestPer": res["one_Testevery_X_ppl"],
            "DeathPerMil": res["Deaths_1M_pop"],
            "CriticalCases": res["Serious_Critical"],
            "TestsPerMil": res["Tests_1M_Pop"],
            "CasesPerMil": res["TotCases_1M_Pop"]
        };
    }).catch(function (error) {
        console.error(error);
    });
}


export { getCountries, getCountryInfo, Country };