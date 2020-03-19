import React, { useState, useEffect } from 'react';

function CountriesCases({ axios }) {

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    const response = await axios.get('https://coronavirus-19-api.herokuapp.com/countries');
    setData(response.data);
  }

  if (!data) return null;

  return (
    <table>
      <tbody>
        <tr className='fixed bold'>
          <td>País</td>
          <td>Número de Casos</td>
          <td>Novos casos hoje</td>
          <td>Número de mortes</td>
          <td>Novas mortes hoje</td>
        </tr>
        {data.map(c => {
          const { country, cases, todayCases, deaths, todayDeaths } = c;

          return (
            <tr key={country}>
              <td>{country}</td>
              <td className='big'>{cases}</td>
              <td className='big'>{todayCases}</td>
              <td className='big'>{deaths}</td>
              <td className='big'>{todayDeaths}</td>
            </tr>
          );

        })}
      </tbody>
    </table>
  )

}

export default CountriesCases;
