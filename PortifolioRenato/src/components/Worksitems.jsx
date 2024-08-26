/* eslint-disable react/prop-types */
import './Worksitems.css'
import { Link } from 'react-router-dom';

export function Worksitems({ source, type, title, link }) {
    return (
        <div className="last_works_post">
            <Link to={link} className="Link_work">
                <img src={source} alt="" />
            </Link>
            <div className="last_works_item_description">
                <h1>{type}</h1>
                <h3>{title}</h3>
            </div>
        </div>
    );
}