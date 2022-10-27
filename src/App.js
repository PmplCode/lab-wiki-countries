import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useState } from "react";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {

  const [countries, setCountries] = useState([{name:{official: "Loading..."}, alpha2Code:"Loading..."}]);

  axios.get('https://ih-countries-api.herokuapp.com/countries')
  .then(resp => {
    setCountries(resp.data)
  })

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<CountriesList countries={countries} />} />
        <Route path="/countries/:countryId" element={[<CountriesList countries={countries} />,<CountryDetails countries={countries}/>]} />
      </Routes>
    </div>
  );
}
export default App;