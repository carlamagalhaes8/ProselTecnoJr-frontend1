import styles from './Inicio.module.css';

function Inicio() {
    return (
        <section id="inicio" className={styles.Inicio}>
            <div className={styles.InicioTexto}>
                <h1>Café quentinho,<br/>bolo feito com carinho.</h1>

                <p>Receitas caseiras, café passado na hora e aquele sabor que lembra a casa da gente.</p>

                <a className={styles.inicioButton}
                            href="https://wa.me/559912345678"
                            target="_blank"
                            rel="noopener noreferrer"> Fazer encomenda</a>
            </div>
        </section>
    );
}

export default Inicio;