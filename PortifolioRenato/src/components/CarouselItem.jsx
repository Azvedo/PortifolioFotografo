import './Carousel.css';

export function CarouselItem({source, type, title}) {
    return (
        <section className="carousel_item ">
            <img src={source} alt="" />
                <div className="carousel_description">
                    <h3>{type}</h3>
                    <h1>{title}</h1>
                </div>
        </section>
    );
}
