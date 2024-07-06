import './Header.css';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className='header_notrasnparent'>
            <div className="nav_title">
                <h2>RENATO FILHO</h2>
                <p>Fotógrafo</p>
            </div>
            <nav>
                <ul className="list">
                    <li className="list_item"><Link to="/" className='nav_link'>HOME</Link></li>
                    <li className="list_item"><Link to="/trabalhos" className='nav_link'>TRABALHOS</Link></li>
                    <li className="list_item"><Link to="/contato" className='nav_link'>CONTATO</Link></li>
                    <li className="list_item"><Link to="/sobre" className='nav_link'>SOBRE</Link></li>
                </ul>
            </nav>
        </header>
    );
}