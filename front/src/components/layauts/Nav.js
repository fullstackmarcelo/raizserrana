import { Link } from "react-router-dom";
import '../../styles/componentes/layouts/nav.css';



const Nav = (props) => {
    return (
        <nav>
            <div class='holder'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tienda">Tienda</Link></li>
                    <li><Link to="/reserva">Reserva</Link></li>
                    <li><Link to="/contactos">Contactos</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;