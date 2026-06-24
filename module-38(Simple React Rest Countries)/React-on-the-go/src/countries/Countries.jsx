import { use, useState } from "react";
import Country from "../country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountries = (country) => {
    console.log("visited countries clicked", country);
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };

  const [visitedFlag, setVisitedFlag] = useState([]);
  const handleVisitedFlag = (flag) => {
     const newFlag = [...visitedFlag, flag];
    setVisitedFlag(newFlag);
  };

  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-xl font-bold mb-5 text-center">
        Total Visited {countries.length} countries
      </h2>
      <h2>Total Country Visited: {visitedCountries.length} </h2>
      <div className="flex flex-wrap gap-2 mb-5">
        {visitedFlag.map((vFlag, index) => (
          <img className="w-12.5 h-8" src={vFlag} key={index}></img>
        ))}
      </div>
      <div className=" grid grid-cols-4 gap-4 w-11/12 mx-auto ">
        {countries.map((country) => (
          <Country
            country={country}
            key={country?.ccn3?.ccn3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

// {
//     "name": {
//         "common": "Jamaica",
//         "official": "Jamaica"
//     },
//     "ccn3": {
//         "ccn3": "388"
//     },
//     "currencies": {
//         "currencies": {
//             "JMD": {
//                 "name": "Jamaican dollar",
//                 "symbol": "$"
//             }
//         }
//     },
//     "capital": {
//         "capital": [
//             "Kingston"
//         ]
//     },
//     "region": {
//         "region": "Americas"
//     },
//     "languages": {
//         "languages": {
//             "eng": "English",
//             "jam": "Jamaican Patois"
//         }
//     },
//     "area": {
//         "area": 10991
//     },
//     "cca3": {
//         "cca3": "JAM"
//     },
//     "population": {
//         "population": 2961161
//     },
//     "continents": {
//         "continents": [
//             "North America"
//         ]
//     },
//     "flags": {
//         "flags": {
//             "png": "https://flagcdn.com/w320/jm.png",
//             "svg": "https://flagcdn.com/jm.svg",
//             "alt": "The flag of Jamaica is divided by a gold diagonal cross into four alternating triangular areas of green at the top and bottom, and black on the hoist and fly sides"
//         }
//     }
// }
