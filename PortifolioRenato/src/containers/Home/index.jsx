import './index.css';
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Worksitems } from "../../components/Worksitems";
import { Carousel } from "../../components/Carousel";

const items = [
    { source: '/portifolio/teste.png', type: 'Parto', title: 'Parto de Mariele' },
    { source: '/portifolio/teste1.png', type: 'Type 2', title: 'Title 2' },
    { source: '/portifolio/teste.png', type: 'Type 3', title: 'Title 3' },
]

export function Home() {
    return (
        <>
            <Header />
            <Carousel items={items} />

            <section className='main_content'>
                <div className='last_works'>
                    <h2>Últimos Trabalhos</h2>
                    <div className='last_works_items'>
                        <Worksitems source='portifolio/teste.png' type="Ensaio" title="Familia de Josi" />
                        <Worksitems source="portifolio/teste.png" type="Ensaio" title="Familia de Josi" />
                        <Worksitems source="portifolio/teste.png" type="Ensaio" title="Familia de Josi" />
                        <Worksitems source="portifolio/teste.png" type="Ensaio" title="Familia de Josi" />
                        <Worksitems source="portifolio/teste.png" type="Ensaio" title="Familia de Josi" />
                        <Worksitems source="portifolio/teste.png" type="Ensaio" title="Familia de Josi" />
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
}