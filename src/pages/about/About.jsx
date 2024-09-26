import React from 'react'
import img from '/images/about/NICOVITTO_12.jpg';


const About = () => {
    return (
        <>
            <section id="about" className="about section">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                        sit in iste officiis commodi quidem hic quas.
                    </p>
                </div>
                {/* End Section Title */}
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4">
                            <img src={img} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>UI/UX Designer &amp; Web Developer.</h2>
                            <p className="fst-italic py-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Birthday:</strong> <span>1 May 1995</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Website:</strong> <span>www.example.com</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Phone:</strong>{" "}
                                            <span>+123 456 7890</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                                            <span>New York, USA</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                                            <span>30</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Degree:</strong>{" "}
                                            <span>Master</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" /> <strong>Email:</strong>{" "}
                                            <span>email@example.com</span>
                                        </li>
                                        <li>
                                            <i className="bi bi-chevron-right" />{" "}
                                            <strong>Freelance:</strong> <span>Available</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="py-3">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio
                                vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
                                incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
                                officiis quidem quia. Sed et consectetur qui quia repellendus itaque
                                neque.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* /About Section */}
            <>
                <section id="skills" className="skills section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Skills</h2>
                        <p>
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                            consectetur velit
                        </p>
                    </div>
                    {/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row skills-content skills-animation">
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        <span>HTML</span> <i className="val">100%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={100}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                                <div className="progress">
                                    <span className="skill">
                                        <span>CSS</span> <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                                <div className="progress">
                                    <span className="skill">
                                        <span>JavaScript</span> <i className="val">75%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={75}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                            </div>
                            <div className="col-lg-6">
                                <div className="progress">
                                    <span className="skill">
                                        <span>PHP</span> <i className="val">80%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={80}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                                <div className="progress">
                                    <span className="skill">
                                        <span>WordPress/CMS</span> <i className="val">90%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={90}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                                <div className="progress">
                                    <span className="skill">
                                        <span>Photoshop</span> <i className="val">55%</i>
                                    </span>
                                    <div className="progress-bar-wrap">
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            aria-valuenow={55}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                                {/* End Skills Item */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Skills Section */}
            </>

        </>

    )
}

export default About