import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao'
import CardTitleText3Tabs from '../../Components/CardTitleText3Tabs'

function Atributos() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const headersConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcjp1c2Vy'
      }
    };
    axios.get(`http://localhost:8080/api/v1/atributos`, headersConfig).then(response => {
      let retornoAPI = response.data;
      setInfo(retornoAPI);
    });
  }, []);

  return (
    <>
      <BarraDeNavegacao />
      {info.map(variavelLoop => {
        return (<CardTitleText3Tabs abreviacaoAtributo={variavelLoop.abreviacaoAtributo} nomeAtributo={variavelLoop.nomeAtributo}
          descricaoAtributo={variavelLoop.descricaoAtributo} tomateAtributo={variavelLoop.tomateAtributo} descricaoComplementar={variavelLoop.descricaoComplementar} testesAtributo={variavelLoop.testesDoAtributo} />)
      })}
    </>
  );
}

export default Atributos;