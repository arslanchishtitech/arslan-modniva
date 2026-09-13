
import './Home.css'
import heroImage from '../assets/images/hero-model.jpg'
import IntroSection from '../components/IntroSection'
import SelectedWork from '../components/SelectedWork'
import ProfileSnapshot from '../components/ProfileSnapshot'
import PresenceInMotion from '../components/PresenceInMotion'
import CTASection from '../components/CTASection'


const Home = () => {
  return (
    <main className="home">
      <section className="hero">
       

        <div
          className="hero-image"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-eyebrow">FASHION • EDITORIAL • COMMERCIAL</p>

          <h1>
            ARSLAN
            <span>MODNIVA</span>
          </h1>

          <p className="hero-subtitle">
            Emerging Fashion Model
          </p>
        </div>

        <div className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </div>
      </section>
       <IntroSection />
       <SelectedWork />
       <ProfileSnapshot />
       <PresenceInMotion />
       <CTASection />
       
    </main>
  )
}

export default Home