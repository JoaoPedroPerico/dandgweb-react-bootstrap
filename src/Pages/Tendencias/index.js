import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao'
import CardTitleText from '../../Components/CardTitleText'

function Tendencias() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const headersConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcjp1c2Vy'
      }
    };
    axios.get(`http://localhost:8080/api/v1/tendencias`, headersConfig).then(response => {
      let retornoAPI = response.data;
      setInfo(retornoAPI);
    });
  }, []);

  return (
    <>
      <BarraDeNavegacao />

      {info.map(variavelLoop => {
        return (<CardTitleText abreviacaoTendencia={variavelLoop.abreviacaoTendencia} nomeTendencia={variavelLoop.nomeTendencia}
          descricaoTendencia={variavelLoop.descricaoTendencia} />)
      })}
    </>
  );
}

export default Tendencias;