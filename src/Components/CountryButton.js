import './CountryButton.css'

function CountryButton(props) {
    const onClick = () => {
        props.setSelectedCountry(props.country);
    }

    return (
        <button id={props.selected ? 'CountryButtonSelected' : ''} className='CountryButton' onClick={onClick}>
            {props.country.name}
        </button>
    )
}

export default CountryButton;