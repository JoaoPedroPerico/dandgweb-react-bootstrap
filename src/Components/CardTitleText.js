import Card from 'react-bootstrap/Card';
import './CardTitleText.css'

function CardTitleText(props){
    return (
        <Card className='cssCard' style={{backgroundColor: 'lightGray'}}>
          <Card.Body>
            <Card.Title>{props.abreviacaoTendencia} - {props.nomeTendencia}</Card.Title>
            <Card.Text>{props.descricaoTendencia}</Card.Text>
          </Card.Body>
        </Card>
    )
}

export default CardTitleText;