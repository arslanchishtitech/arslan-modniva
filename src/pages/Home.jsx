import HeroSection from '../components/HeroSection'
import './Home.css'
import IntroSection from '../components/IntroSection'
import SelectedWork from '../components/SelectedWork'
import ProfileSnapshot from '../components/ProfileSnapshot'
import PresenceInMotion from '../components/PresenceInMotion'
import CTASection from '../components/CTASection'
import SignatureStatement from '../components/SignatureStatement'



const Home = () => {
  return (
    <main className="home">
       
       <HeroSection />
       <SignatureStatement />
       <IntroSection />
       <SelectedWork />
       <ProfileSnapshot />
       <PresenceInMotion />
       <CTASection />
       
       
    </main>
  )
}

export default Home