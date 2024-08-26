/* eslint-disable react/prop-types */
import './Header.css';
import { Link } from 'react-router-dom';

export function Header({ backgroundColor }) {
    return (
        <header style={{ backgroundColor }}>
            <div className="nav_title">
                <h2>RENATO FILHO</h2>
                <p>Fotógrafo</p>
            </div>
            <nav>
                <input type="checkbox" id='sidebar-active' />
                <label htmlFor="sidebar-active" className='open_sidebar_button'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0-.55.45-1 1-1h16c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1z"/></svg>
                </label>

                <ul className="list">
                    <label htmlFor="sidebar-active" className='close_sidebar_button'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </label>
                    <li className="list_item"><Link to="/" className='nav_link'>HOME</Link></li>
                    <li className="list_item"><Link to="/trabalhos" className='nav_link'>TRABALHOS</Link></li>
                    <li className="list_item"><Link to="/sobre" className='nav_link'>SOBRE</Link></li>
                </ul>
            </nav>
        </header>
    );
}