import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Seo from './components/Seo';

import Home from './pages/Home';
import Practical from './pages/Practical';
import About from './pages/About';
import Contact from './pages/Contact';
import BrusselsSupport from './pages/BrusselsSupport';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

import './site-extras.css';

export default function App() {
  return (
    <div className="app-shell">
      <Seo />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/praktisch" element={<Practical />} />
          <Route path="/over-bnb" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/steun-stad-brussel" element={<BrusselsSupport />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}