import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Clock3,
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';

const partnerLogos = [1, 2, 3, 4, 5];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="home-hero hero-photo-section">
        <div className="hero-overlay" />

        <div className="page-width hero-content">
          <span className="eyebrow">
            WELKOM BIJ
          </span>

          <h1>
            <span>BRUSSEL NOORD</span>
            <br />
            BASKET
          </h1>

          <p>
            Basketbal in Brussel. Een club waar ontwikkeling,
            plezier en community op én naast het veld centraal staan.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-green"
              to="/praktisch"
            >
              Praktische info
              <ArrowRight size={18} />
            </Link>

            <Link
              className="button button-outline"
              to="/contact"
            >
              Contact
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="logo-carousel-section section-dark">
        <div className="page-width">
          <SectionHeader
            eyebrow="ONZE PARTNERS"
            title="Samen maken we meer mogelijk."
          />
        </div>

        <div
          className="logo-marquee"
          aria-label="Partnerlogo's"
        >
          <div className="logo-track">
            {[...partnerLogos, ...partnerLogos].map(
              (logo, index) => (
                <div
                  className="logo-slot"
                  key={`${logo}-${index}`}
                >
                  <img
                    src={`/assets/partners/partner-${logo}.svg`}
                    alt={`Partner ${logo}`}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* VOLGENDE WEDSTRIJD */}
      <section className="section-light next-match-home">
        <div className="page-width">
          <SectionHeader
            eyebrow="VOLGENDE WEDSTRIJD"
            title="Kom BNB supporteren."
          />

          <div className="featured-match">
            <div className="featured-date">
              <span>ZA</span>
              <strong>16</strong>
              <span>NOV</span>
            </div>

            <div className="featured-team bnb-team">
              <img
                src="/assets/bnb-logo-green.png"
                alt="Brussel Noord Basket"
              />

              <div>
                <strong>Brussel Noord Basket</strong>
                <span>U18</span>
              </div>
            </div>

            <div className="featured-vs">
              VS
            </div>

            <div className="featured-team">
              <div className="opponent-placeholder large">
                MR
              </div>

              <div>
                <strong>Molenbeek Rebels</strong>
                <span>U18</span>
              </div>
            </div>

            <div className="featured-info">
              <span>
                <Clock3 size={18} />
                14:30
              </span>

              <span>
                <MapPin size={18} />
                Sporthal Neder-Over-Heembeek
              </span>

              <span>
                <CalendarDays size={18} />
                Gewestelijke competitie
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRAKTISCHE INFO CTA */}
      <section className="home-practical-cta section-dark">
        <div className="page-width split-cta">
          <div>
            <span className="eyebrow">
              ALLES OP ÉÉN PLEK
            </span>

            <h2>
              Trainingen, matchen en praktische info.
            </h2>

            <p>
              Bekijk de komende wedstrijden, trainingsuren,
              locaties en alle praktische afspraken van de club.
            </p>
          </div>

          <Link
            className="button button-green"
            to="/praktisch"
          >
            Bekijk praktische info
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}