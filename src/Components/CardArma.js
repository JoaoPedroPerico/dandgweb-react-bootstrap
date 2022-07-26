import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CardArma.css';

function CardArma(props) {
    const [show, setShow] = useState(false);
    const [stateNomePropriedadeArma, setStateNomePropriedadeArma] = useState("Init");
    const [stateDescricaoPropriedadeArma, setStateDescricaoPropriedadeArma] = useState("Init ...");

    const handleClose = () => setShow(false);
    const handleShow = (nome, descricao) => {
        setStateNomePropriedadeArma(nome);
        setStateDescricaoPropriedadeArma(descricao);
        setShow(true);
    };

    return (
        <Card className='cssCard' style={{ backgroundColor: 'lightGray' }}>
            <Card.Body>
                <Card.Title>{props.nomeArma}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{`Grupo da arma: ${props.tipoDeArma}`}</ListGroup.Item>
                <ListGroup.Item>{`Dano: ${props.danoArma} ${props.tipoDeDano}`}</ListGroup.Item>
                <ListGroup.Item>{`Preço: ${props.precoArma}`}</ListGroup.Item>
                <ListGroup.Item>{`Peso: ${props.pesoArma}`}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {
                    props.propriedadesArma.map(variavelLoop =>
                        <Button className="botaoPropriedade" variant="outline-dark" onClick={() => handleShow(variavelLoop.nomePropriedadeArma, variavelLoop.descricaoPropriedadeArma)}>{variavelLoop.nomePropriedadeArma}</Button>)
                }
                <br></br>
                Clique na propriedade para ver explicação

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>{stateNomePropriedadeArma}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>{stateDescricaoPropriedadeArma}</Offcanvas.Body>
                </Offcanvas>
            </Card.Body>
        </Card>
    );
}

export default CardArma;