import './CountryInfoCard.css'

function CountryInfoCard(props) {
    return (
        <div className='CountryInfoCard'>
            <h1 className='CountryStrings' id='CountryName'>{props.countryInfo.Country}, {props.countryInfo.Continent}</h1>
            <ul className='CountryStrings' id='InfoList'>
                <li className='CountryStrings' id='list_item'>
                    <span className='info' id='info'>Total cases:</span>
                    <span className='CountryStrings' id='info_green'>{props.countryInfo["TotalCases"]}</span>
                </li>
                <li className='list_item'>
                    <span className='info'>New cases:</span>
                    <span className='CountryStrings' id='info_green'>{props.countryInfo["NewCases"]}</span>
                </li>
                <li className='list_item'>
                    <span className='info'>Total deaths:</span>
                    <span className='CountryStrings' id='info_red'>{props.countryInfo["TotalCases"]}</span>
                </li>
                <li className='list_item'>
                    <span className='info'>New deaths:</span>
                    <span className='CountryStrings' id='info_red'>{props.countryInfo["NewDeaths"]}</span>
                </li>
            </ul>
        </div>
    )
}

export default CountryInfoCard;