import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom';
import './BarraDeNavegacao.css'

function BarraDeNavegacao() {
    const navigate = useNavigate();

    function pagHome() {
        navigate('/');
    }

    function pagAtributos() {
        navigate('/atributos');
    }

    function pagTendencias() {
        navigate('/tendencias');
    }

    function pagArmas() {
        navigate('/armas');
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand onClick={pagHome} className='cssBrand'>Dungeons & Griffins</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={pagArmas}>Armas</Nav.Link>
                    <Nav.Link onClick={pagAtributos}>Atributos</Nav.Link>
                    <Nav.Link onClick={pagTendencias}>Tendencias</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BarraDeNavegacao;