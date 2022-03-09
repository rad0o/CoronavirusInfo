import './App.css';
import { getCountries } from './CoronaAPI'
import { useEffect, useState } from "react"
import CountryList from './CountryList';
import CountryInfoContainer from './CountryInfoContainer';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    }

    fetchData()
      .catch(console.error);
  }, [])

  console.log(countries);

  return (
    <div className="App">
      <CountryList />
      <CountryInfoContainer />
    </div>
  );
}

export default App;
