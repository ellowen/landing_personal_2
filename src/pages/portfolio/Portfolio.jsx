import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css'; // Importa los estilos de GLightbox

import image1 from '/images/portfolio/10.jpg';
import image2 from '/images/portfolio/60 (1).jpg';
import image3 from '/images/portfolio/160.jpeg';
import image4 from '/images/portfolio/160.jpeg';
import image5 from '/images/portfolio/130.jpg';

const Portfolio = () => {

    useEffect(() => {

        const lightbox = GLightbox({
            selector: '.glightbox', // Selecciona el atributo para identificar los elementos del lightbox
            touchNavigation: true,
            loop: true
        });
        return () => {
            lightbox.destroy(); // Destruye la instancia de GLightbox al desmontar el componente
        };
    }, []);

    const portfolioItems = [
        {
            category: 'filter-app',
            imgSrc: image1,
            title: 'App 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-product',
            imgSrc: image2,
            title: 'Product 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-branding',
            imgSrc: image3,
            title: 'Branding 1',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-app',
            imgSrc: image4,
            title: 'App 2',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        },
        {
            category: 'filter-app',
            imgSrc: image5,
            title: 'App 3',
            description: 'Lorem ipsum, dolor sit amet consectetur',
        }
    ];

    const filters = ['All', 'App', 'Product', 'Branding'];

    return (
        <>
            {/* Portfolio Section */}
            <section id="portfolio" className="portfolio section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Gallery</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                        sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container">
                    <div
                        className="isotope-layout"
                        data-default-filter="*"
                        data-layout="masonry"
                        data-sort="original-order"
                    >
                        <ul
                            className="portfolio-filters isotope-filters"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            {/* Renderizamos los filtros dinámicamente */}
                            {filters.map((filter, index) => (
                                <li
                                    key={index}
                                    data-filter={`.filter-${filter.toLowerCase()}`}
                                    className={filter === 'All' ? 'filter-active' : ''}
                                >
                                    {filter}
                                </li>
                            ))}
                        </ul>
                        {/* End Portfolio Filters */}
                        <div
                            className="row gy-4 isotope-container"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            {/* Renderizamos los items del portfolio dinámicamente */}
                            {portfolioItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}
                                >
                                    <img
                                        src={item.imgSrc}
                                        className="img-fluid"
                                        alt={item.title}
                                    />
                                    <div className="portfolio-info">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <a
                                            href={item.imgSrc}
                                            title={item.title}
                                            data-gallery={`portfolio-gallery-${item.category}`}
                                            className="glightbox preview-link"
                                        >
                                            <i className="bi bi-zoom-in" />
                                        </a>
                                        <a
                                            href="portfolio-details.html"
                                            title="More Details"
                                            className="details-link"
                                        >
                                            <i className="bi bi-link-45deg" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* End Portfolio Container */}
                    </div>
                </div>
            </section>
            {/* /Portfolio Section */}
        </>
    );
};

export default Portfolio;
