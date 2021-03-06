import React, { useState, useEffect } from 'react';

function EspecificCountry({ axios }) {

  const [data, setData] = useState(null);
  const [country, setCountry] = useState('Brazil');
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    getData();
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  async function getData() {
    const response = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
    console.log(response.data);
    setData(response.data);
  }

  async function getCountries() {
    const response = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    const countries = response.data.map(c => c.country);
    setCountriesList(countries);
  }

  if (!data || !countriesList) return null;

  return (
    <div className='especific-country'>
      <h1>Casos no:
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countriesList.sort().map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </h1>
      <table>
        <tbody>
          <tr>
            <td>País</td>
            <td>{data.country}</td>
          </tr>
          <tr>
            <td>Número de casos</td>
            <td className='big'>{data.cases}</td>
          </tr>
          <tr>
            <td>Novos casos hoje</td>
            <td className='big'>{data.todayCases}</td>
          </tr>
          <tr>
            <td>Número de mortes</td>
            <td className='big'>{data.deaths}</td>
          </tr>
          <tr>
            <td>Número de mortes hoje</td>
            <td className='big'>{data.todayDeaths}</td>
          </tr>
          <tr>
            <td>Número de curados</td>
            <td className='big'>{data.recovered}</td>
          </tr>
          <tr>
            <td>Casos ativos</td>
            <td className='big'>{data.active}</td>
          </tr>
          <tr>
            <td>Casos criticos</td>
            <td className='big'>{data.critical}</td>
          </tr>
          <tr>
            <td>Casos a por milhão de habitantes</td>
            <td className='big'>{data.casesPerOneMillion}</td>
          </tr>
        </tbody>
      </table>
    </div >
  );

}

export default EspecificCountry;
