import './CountryInfoContainer.css'
import CountryInfoCard from './CountryInfoCard'
import { useEffect, useState } from "react"
import { getCountryInfo } from '../APIServices/CoronaAPI'

function CountryInfoContainer(props) {
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCountryInfo(props.selectedCountry)
            console.log(data);
            setCountryInfo(data);
        }
            
        fetchData()
            .catch(console.error);
    }, [props.selectedCountry])

    return (
        <div className='CountryInfoContainer'>
            <CountryInfoCard countryInfo={countryInfo} />
        </div>
    )
}

export default CountryInfoContainer;