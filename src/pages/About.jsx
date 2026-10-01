import { Link } from 'react-router-dom';
import { Heart, Users, TrendingUp, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <>
      <section className="subpage-hero about-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">OVER BNB</span>
          <h1>MEER DAN<br /><span>EEN CLUB</span></h1>
          <p>Een pagina waar Brussel Noord Basket zijn verhaal, identiteit en visie kan tonen. De huidige tekst is bewust als invulbare basis geschreven.</p>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width about-story-grid">
          <div className="about-photo-wrap">
            <img src="/assets/training.jpg" alt="Basketbaltraining bij BNB" />
            <div className="green-corner" />
          </div>
          <div className="about-copy">
            <span className="eyebrow">ONS VERHAAL</span>
            <h2>Brussel Noord Basket groeit samen met zijn spelers.</h2>
            <p>
              Hier kan het volledige verhaal van BNB komen: hoe de club ontstaan is, waar de club voor staat,
              wie er achter de werking zit en welke rol de club wil spelen in Brussel.
            </p>
            <p>
              De pagina is bewust ruim gehouden zodat je later makkelijk extra alinea's, historische momenten,
              een missie of quotes van coaches en spelers kunt toevoegen.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark values-section">
        <div className="page-width">
          <span className="eyebrow">WAAR WE VOOR STAAN</span>
          <h2>People. Development. Community.</h2>
          <div className="values-grid">
            <div className="value-card"><Users /><h3>Samen</h3><p>Spelers, coaches, ouders en supporters vormen één club.</p></div>
            <div className="value-card"><TrendingUp /><h3>Ontwikkeling</h3><p>Iedere speler krijgt de ruimte om sportief en persoonlijk te groeien.</p></div>
            <div className="value-card"><Heart /><h3>Community</h3><p>Basketbal als middel om mensen in Brussel met elkaar te verbinden.</p></div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width story-cta">
          <div><span className="eyebrow">KENNISMAKEN?</span><h2>Ontdek BNB van dichtbij.</h2><p>Heb je vragen over de club of wil je een training bijwonen? Neem rechtstreeks contact met ons op.</p></div>
          <Link className="button button-green" to="/contact">Contact <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
