import styles from './HorariosEndereco.module.css';

import arebesco from '../assets/arebesco.png';

function HorariosEndereco() {
    return (
        <section id="horarioseendereco" className={styles.horariosEndereco}>
            <h1 className={styles.horariosEnderecoTitle}>Horários & Endereço</h1>
            <img className={styles.horariosEnderecoOrnament} src={arebesco} alt="Arebescos" />

            <div className={styles.horariosEnderecoContainer}>
                <div className={styles.horariosenderecotext}>
                    <p className={styles.horariosenderecotextTitle}>Horários</p>
                    <p className={styles.horariosenderecotextParagraph}>Segunda a Sexta: 08:00 - 18:00</p>
                    <p className={styles.horariosenderecotextParagraph}>Sábado: 08:00 - 12:00</p>
                    <p className={styles.horariosenderecotextParagraph}>Domingo: Fechado</p>
                </div>
                <div className={styles.horariosenderecotext}>
                    <p className={styles.horariosenderecotextTitle}>Endereço</p>
                    <p className={styles.horariosenderecotextParagraph}>Campus Soane Nazaré de Andrade - Rod. Jorge Amado, Km 16 - Salobrinho, Ilhéus - BA</p>
                </div>
            </div>

            <div className={styles.horariosEnderecoMap}>
                <iframe
                    src="https://www.google.com/maps?q=Universidade+Estadual+de+Santa+Cruz+UESC,+Ilh%C3%A9us,+BA&output=embed"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

            </div>
            
        </section>
    );
    }

export default HorariosEndereco;