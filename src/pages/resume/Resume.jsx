import React from 'react';
import img from '/images/gigs/image.png';

const Resume = () => {
    const upcomingEvents = [
        {
            date: 'Sep 28, 2024',
            title: 'Kolektiv Studio Crobar',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Oct 25, 2024',
            title: 'Evolve, Muelle Costanera',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Nov 16, 2024',
            title: 'Great Sound Showcase, The Bow',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Sep 28, 2024',
            title: 'Kolektiv Studio Crobar',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Oct 25, 2024',
            title: 'Evolve, Muelle Costanera',
            location: 'Capital, Buenos Aires',
        },
        {
            date: 'Nov 16, 2024',
            title: 'Great Sound Showcase, The Bow',
            location: 'Capital, Buenos Aires',
        },
    ];

    return (
        <>
            <section id="resume" className="resume section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Gigs</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                        sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                {/* End Section Title */}
                <section className="events-section">
                    <div className="container">
                        <div className="row">
                            {/* Columna de los eventos */}
                            <div className="col-lg-6">
                                <div className="events-list">
                                    {upcomingEvents.map((event, index) => (
                                        <div className="event-item mb-4" key={index}>
                                            <i className="bi bi-calendar-event"> </i> {/* Icono de calendario */}
                                            <div className="event-date text-primary">{event.date}</div>
                                            <div className="event-title fw-bold">{event.title}</div>
                                            <div className="event-location text-muted">{event.location}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Columna de la imagen */}
                            <div className="col-lg-6">
                                <div className="image-container text-center">
                                    <img
                                        src={img}
                                        alt="Event Poster"
                                        className="img-fluid rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Upcoming Gigs Section */}
            </section>
        </>
    );
};

export default Resume;
