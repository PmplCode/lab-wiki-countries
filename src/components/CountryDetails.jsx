import { Link, useParams } from "react-router-dom";

function CountryDetails( {countries} ) {

    const {countryId} = useParams();

    const country = countries.find(count => count.alpha3Code === countryId)
    console.log("country: ", country)
    console.log("countries: ", countries)

    return (
      <div className="col-7 text-right">
        <h1>{country.name.official}</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                {country.borders.map(bord => {
                    return (
                      <li>
                        <Link to={"/countries/"+bord}>{bord}</Link>
                      </li>
                    );
                })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default CountryDetails;