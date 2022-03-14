import './App.css';
import { Country } from '../APIServices/CoronaAPI'
import { useState } from "react"
import CountryList from './CountryList';
import CountryInfoContainer from './CountryInfoContainer';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(new Country('Romania', 'ROU'));

  return (
    <div className="App">
      <CountryList setSelectedCountry={setSelectedCountry} selectedCountry={selectedCountry} />
      <CountryInfoContainer selectedCountry={selectedCountry} />
    </div>
  );
}

export default App;
