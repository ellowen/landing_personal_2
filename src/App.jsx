import Footer from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import Preloader from "./components/PreLoader/PreLoader"
import ScrollTop from "./components/ScrollTop/ScrollTop"
import About from "./pages/About/About"
import Contact from "./pages/contact/Contact"
import { Hero } from "./pages/Hero"
import Portfolio from "./pages/portfolio/Portfolio"
import Resume from "./pages/resume/Resume"
import Services from "./pages/services/Services"


function App() {
  return (
    <>
      <Preloader />
      <body class="index-page">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Resume />
        <Contact />
        <Footer />
        <ScrollTop />
      </body>
    </>
  )
}

export default App
