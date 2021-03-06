import './SearchField.css'

function SearchField(props) {
    const onChange = (event) => {
        props.setQuery(event.target.value)
    }

    return (
        <input className="SearchField" placeholder="Search country..." onChange={onChange} autoComplete="none"/>
    );
}

export default SearchField;