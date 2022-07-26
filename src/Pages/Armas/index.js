import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao'
import CardArma from '../../Components/CardArma'


function Armas() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const headersConfig = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcjp1c2Vy'
      }
    };
    axios.get(`http://localhost:8080/api/v1/armas`, headersConfig).then(response => {
      let retornoAPI = response.data;
      setInfo(retornoAPI);
      console.log(JSON.stringify(info));
    });
  }, []);

  return (
    <>
      <BarraDeNavegacao />
      {info.map(variavelLoop => {
        return (<CardArma nomeArma={variavelLoop.nomeArma} danoArma={variavelLoop.danoArma} precoArma={variavelLoop.precoArma} tipoDeArma={variavelLoop.tipoDeArma.nomeTipoDeArma} tipoDeDano={variavelLoop.tipoDeDano ? variavelLoop.tipoDeDano.nomeTipoDeDano : ""} pesoArma={variavelLoop.pesoArma} propriedadesArma={variavelLoop.propriedadesArma}/>)
      })}
    </>
  );
}

export default Armas;