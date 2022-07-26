import Card from 'react-bootstrap/Card';
import './CardTitleText3Tabs.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';

function CardTitleText3Tabs(props) {
  return (
    <Card className='cssCard' style={{ backgroundColor: 'lightGray' }}>
      <Card.Body>
        <Card.Title>{props.abreviacaoAtributo} - {props.nomeAtributo}</Card.Title>
        <Card.Text>{props.descricaoAtributo}</Card.Text>
      </Card.Body>
      <Tabs className='cssTabs' defaultActiveKey="profile">
        <Tab className='cssTab' eventKey="Tomate" title="Tomate">
          {props.tomateAtributo}
        </Tab>
        <Tab className='cssTab' eventKey="Descrição complementar" title="Descrição complementar">
          {props.descricaoComplementar}
        </Tab>
        <Tab className='cssTab' eventKey="Testes" title="Testes">
          {props.testesAtributo}
        </Tab>
      </Tabs>
    </Card>
  )
}

export default CardTitleText3Tabs;