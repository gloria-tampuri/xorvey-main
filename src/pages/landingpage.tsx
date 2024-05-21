import AboutUs from "../components/AboutUs/AboutUs"
import ApplicationProcess from "../components/ApplicationProcess/ApplicationProcess"
import Benefits from "../components/Benefits/Benefits"
import Contact from "../components/Contact/Contact"
import Faqs from "../components/Faqs/Faqs"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import StartProcess from "../components/StartProcess/StartProcess"


const LandingPage = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Benefits />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <ApplicationProcess/>
      <div id="faqs">
        <Faqs />
      </div>
      <StartProcess/>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
