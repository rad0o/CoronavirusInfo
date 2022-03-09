import './CountryButton.css'
import { useEffect, useState } from 'react'

function CountryButton(props) {
    return (
        <button className='CountryButton'>
            {props.countryName}
        </button>
    )
}

export default CountryButton;