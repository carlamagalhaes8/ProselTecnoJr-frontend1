import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Cardapio from './cardapio';
import HorariosEndereco from './HorariosEndereco';
import Inicio from './Inicio';


function Home() {
    return (
        <>
            <Navbar />

            <main>
                <Inicio />
                <Cardapio />
                <HorariosEndereco />
            </main>

            <Footer />
        </>
    );
    }

export default Home;