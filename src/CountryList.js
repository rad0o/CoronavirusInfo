import './CountryList.css';
import { getCountries } from './CoronaAPI';
import { useEffect, useState } from 'react';
import CountryButton from './CountryButton';
import SearchField from './SearchField'

function CountryList() {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCountries();
            setCountries(data);
        }

        fetchData()
            .catch(console.error);
    }, []);

    return (
        <div className="CountryList">
            <SearchField setQuery={setQuery} />
            {
                countries.filter(country => {
                    if (query === ""){
                        return country;
                    } else if(country.name.toLowerCase().includes(query.toLowerCase())){
                        return country;
                    }
                })
                    .map((country, index) => <CountryButton countryName={country.name} />)
            }
        </div>
    )
}

export default CountryList;