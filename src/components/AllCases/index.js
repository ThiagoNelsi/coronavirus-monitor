import React, { useState, useEffect } from 'react';
import './styles.css';

function AllCases({ axios }) {

  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    const response = await axios.get('https://coronavirus-19-api.herokuapp.com/all');
    setData(response.data);
  }

  if (!data) return null;

  return (
    <table>
      <tbody>
        <tr>
          <td>Casos</td>
          <td>{data.cases}</td>
        </tr>
        <tr>
          <td>Mortes</td>
          <td>{data.deaths}</td>
        </tr>
        <tr>
          <td>Recuperados</td>
          <td>{data.recovered}</td>
        </tr>
      </tbody>
    </table>
  );

}

export default AllCases;
