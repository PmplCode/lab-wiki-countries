import { Link } from "react-router-dom";

function CountriesList( {countries} ) {

    return(
    <div>
        {countries.map(country => {
            return(
                <div style={{"maxHeight": "90vh", "textAlign":"start", "border":"1px solid black", "padding":"1vh 1vw"}}>
                    <h3>{country.name.official}</h3>
                    <img src={"https://flagpedia.net/data/flags/icon/72x54/"+country.alpha2Code.toLowerCase()+".png"} alt={country.name.official}/>
                    <div className="mt-2">
                        <Link to={"/countries/"+country.alpha3Code}>Detalls del país</Link>
                    </div>
                </div>
            )
        })}
    </div>
    );
}

export default CountriesList;