import React, { useEffect } from 'react';
import Typed from 'typed.js';
// // import img from '/images/hero/hero-bg.jpg';
import img from '/images/hero/portada_landung_4.jpg';
// import imgSound from '/images/icons/soundcloud-logo (1).png';

export const Hero = () => {
  useEffect(() => {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typedStrings = selectTyped.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');

      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monta

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <img src={img} alt="" />
        <div className="container" data-aos="zoom-out">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2>Brandon Johnson</h2>
              <p>
                I'm{" "}
                <span
                  className="typed"
                  data-typed-items="Designer, Developer, Freelancer, Photographer"
                >
                  Designer
                </span>
                <span
                  className="typed-cursor typed-cursor--blink"
                  aria-hidden="true"
                />
              </p>
              <div className="social-links">
                <a href="#">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
``    </>
  );
};
