import './CountryList.css';
import { getCountries } from './CoronaAPI';
import { useDebugValue, useEffect, useState } from 'react';

function CountryList() {
    const [countries, setCountries] = useState([]);

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
            {
                countries.map(country => <h3>{country.name} - {country.letter3}</h3>)
            }
        </div>
    )
}

export default CountryList;