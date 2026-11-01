import styles from './Footer.module.css';

import {FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram} from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.footerContentTitle}>Café de Bairro</p>

                <p className={styles.footerContentParagraph}>O negócio de Dona Marta é preparado com muito carinho,trazendo sabores caseiros que despertam boas lembranças e tornam cada momento ainda mais especial.</p>
            </div>

            <div className={styles.footerContent}>
                <p className={styles.footerContentTitle}>Contatos</p>

                <ul className={styles.footerContentLinks}>
                    <li>
                        <a href="https://www.google.com/maps/search/?api=1&query=UESC+Campus+Soane+Nazar%C3%A9+de+Andrade+Ilh%C3%A9us+BA"
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaMapMarkerAlt />
                        Campus Soane Nazaré de Andrade - Rod. Jorge Amado,
                        Km 16 - Salobrinho, Ilhéus - BA </a>
                        
                    </li>

                    <li>
                        <a href="mailto:cafedebairro@gmail.com"><FaEnvelope /> cafedebairro@gmail.com</a>
                    </li>

                    <li>
                        <a href="tel:+559912345678"><FaPhone />(99) 1234-5678</a>
                    </li>

                    <li>
                        
                            <a href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"><FaInstagram />@cafedebairro</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;