
import logo from '../assets/logo.png'

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>

            <img src={logo} alt="Logo" />

            <ul class={styles.navbarLinks}>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#cardapio">Cardápio</a></li>
                <li><a href="#horarioseendereco">Horários & Endereço</a></li>
            </ul>

            <a className={styles.navbarButton}
            href="https://wa.me/559912345678"
            target="_blank"
            rel="noopener noreferrer"> Fazer encomenda</a>

        </nav>
    );
    }

export default Navbar;