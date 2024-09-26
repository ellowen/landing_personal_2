import React from 'react';

const Services = () => {
  // Array de videos con leyendas
  const videos = [
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1799433580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'Live at PDE - Warming up w/Eelke Kleijn',
    },
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1826372976&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'Live On Boat w/ Guy Gerber by Go for More',
    },
    {
      videoSrc:
        'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1826350071&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      caption: 'DJ Guest Metrodance',
    },
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Music Sets</h2>
          <p>Check out some of my latest live sets and recorded sessions.</p>
        </div>
        {/* End Section Title */}
        <div className="container">
          <div className="row gy-4">
            {/* Renderizamos los videos dinámicamente */}
            {videos.map((video, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)} // Retraso dinámico para el efecto de AOS
              >
                <div className="service-item position-relative">
                  {/* Fondo del icono musical */}
                  <div className="icon-background">
                    {/* <svg
                      width={200} // Más grande
                      height={200}
                      viewBox="0 0 600 600"
                      xmlns="http://www.w3.org/2000/svg"
                      className="background-svg" // Añadimos una clase para poder ajustar su posición y tamaño
                    >
                      <path
                        stroke="none"
                        strokeWidth={0}
                        fill="#f5f5f5"
                        d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"
                      />
                    </svg> */}
                    {/* <i className="bi bi-music-note-list icon-large"></i> */}
                  </div>
                  {/* Video embebido */}
                  <iframe
                    width="100%"
                    height="220" // Reducimos el alto del iframe para hacer la caja más compacta
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src={video.videoSrc}
                  ></iframe>
                  {/* Leyenda debajo del video */}
                  <p className="video-caption">{video.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* /Services Section */}
    </>
  );
};

export default Services;
