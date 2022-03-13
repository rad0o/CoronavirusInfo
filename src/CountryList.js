import './CountryList.css';
import { getCountries } from './CoronaAPI';
import { useEffect, useState } from 'react';
import CountryButton from './CountryButton';
import SearchField from './SearchField'

function CountryList(props) {
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
                countries.filter(country => query === "" || country.name.toLowerCase().includes(query.toLowerCase()))
                    .map((country, index) => <CountryButton key={index} country={country} setSelectedCountry={props.setSelectedCountry} selected={props.selectedCountry.name === country.name ? true : false} />)
            }
        </div>
    )
}

export default CountryList;