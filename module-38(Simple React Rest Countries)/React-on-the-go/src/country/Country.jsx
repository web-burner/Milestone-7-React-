import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const { name, capital, region, area, population, continents, flags } =
    country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className=" rounded-lg p-3 shadow-2xl bg-white">
      <figure>
        <img src={flags?.flags?.png} alt="" />
      </figure>
      <div>
        <p>Name: {name?.common}</p>
        {area.area >= 100000 ? <p>Big Country</p> : <p>Small Country</p>}
        <p>Capital: {capital?.capital}</p>
      </div>
      <div>
        <p>Area: {area?.area}</p>
        <p>Population: {population?.population}</p>
        <p>Region: {region.region}</p>
        <p>Continent: {continents.continents}</p>
      </div>
      <button
        onClick={handleVisited}
        className={`btn border-gray-400 shadow-none  ${visited && "bg-green-900 text-white"}`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button className="btn "
        onClick={() => {
          handleVisitedFlag(flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
