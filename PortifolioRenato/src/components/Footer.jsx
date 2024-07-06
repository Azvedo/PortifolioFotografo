import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer>
            <section >
                <h2 >Renato Filho / Contato</h2>
            </section>
            <div className="footer_icons">
                <a href="https://www.instagram.com/renatofilhofoto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <FontAwesomeIcon icon={faInstagram} size="xl" style={{ color: "#ffffff", }} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5581999105140">
                    <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: "#ffffff" }} />
                </a>
            </div>
        </footer>
    );
}