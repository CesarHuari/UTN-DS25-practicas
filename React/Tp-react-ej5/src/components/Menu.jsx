import { Link, useLocation } from 'react-router-dom';
import '../assets/css/menu.css';

const Menu = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" className={`menu-link ${isActive('/')}`}>
            Inicio
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/ficcion" className={`menu-link ${isActive('/ficcion')}`}>
            Ficción
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/no-ficcion" className={`menu-link ${isActive('/no-ficcion')}`}>
            No Ficción
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/infantil" className={`menu-link ${isActive('/infantil')}`}>
            Infantil
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/tecnico" className={`menu-link ${isActive('/tecnico')}`}>
            Técnico
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/registro" className={`menu-link ${isActive('/registro')}`}>
            Registración
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/contacto" className={`menu-link ${isActive('/contacto')}`}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
