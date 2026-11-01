import styles from './Cardapio.module.css';

import cafecoado from '../assets/cafecoado.jpg';
import paodequeijo from '../assets/paodequeijo.jpeg';
import bolocaseiro from '../assets/bolocaseiro.jpeg';
import arebesco from '../assets/arebesco.png';

function Cardapio() {
    return (
        <section id="cardapio" className={styles.cardapio}>
            <h1 className={styles.horariosEnderecoTitle}>Cardápio</h1>
            <img src={arebesco} alt="Arebescos" />
            
            <div className={styles.cardapioItem}>
                <img src={cafecoado} alt="Café coado" />
                <p className={styles.cardapioItemTitle}>Café coado</p>
                <p className={styles.cardapioItemParagraph}>Nosso café coado é preparado na hora, com grãos selecionados e aquele aroma irresistível que transforma qualquer momento em uma experiência especial.</p>
                <p className={styles.cardapioItemPrice}>R$ 5,00</p>
                <a className={styles.cardapioItemButton}
                            href="https://wa.me/559912345678"
                            target="_blank"
                            rel="noopener noreferrer"> Fazer encomenda</a>
            </div>

            <div className={styles.cardapioItem}>
                <img src={paodequeijo} alt="Pão de queijo" />
                <p className={styles.cardapioItemTitle}>Pão de queijo</p>
                <p className={styles.cardapioItemParagraph}>Nosso pão de queijo é preparado com carinho, com uma casquinha dourada e crocante por fora e uma textura macia e quentinha por dentro.</p>
                <p className={styles.cardapioItemPrice}>R$ 15,00</p>
                <a className={styles.cardapioItemButton}
                            href="https://wa.me/559912345678"
                            target="_blank"
                            rel="noopener noreferrer"> Fazer encomenda</a>
            </div>

            <div className={styles.cardapioItem}>
                <img src={bolocaseiro} alt="Bolo caseiro" />
                <p className={styles.cardapioItemTitle}>Bolo caseiro</p>
                <p className={styles.cardapioItemParagraph}>Nossos bolos caseiros são preparados com ingredientes selecionados e muito carinho, trazendo aquele sabor irresistível de bolo feito em casa.</p>
                <p className={styles.cardapioItemPrice}>R$ 25,00</p>
                <a className={styles.cardapioItemButton}
                            href="https://wa.me/559912345678"
                            target="_blank"
                            rel="noopener noreferrer"> Fazer encomenda</a>
            </div>

        </section>
    );
    }

export default Cardapio;