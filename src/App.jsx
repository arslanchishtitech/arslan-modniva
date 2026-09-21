import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Digitals from "./pages/Digitals";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WorkDetail from "./pages/WorkDetail";
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import CompCard from "./pages/CompCard";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/book" element={<Contact />} />
        <Route path="/portfolio/:slug" element={<WorkDetail />} />
        <Route path="/digitals" element={<Digitals />} />
        <Route path="/comp-card" element={<CompCard />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App