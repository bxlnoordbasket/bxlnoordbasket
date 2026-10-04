import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Clock3,
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';
import '../partner-carousel.css';

const partners = [
  {
    src: '/assets/partners/capital.svg',
    alt: 'Capital',
    href: 'https://nl.capitalbelgium.be/',
    external: true,
  },
  {
    src: '/assets/partners/nolan-design.svg',
    alt: 'Nolan Design',
    href: 'https://nolandesign.be/',
    external: true,
  },
  {
    src: '/assets/partners/bxl-ville-de-stad.svg',
    alt: 'Brussel - La Ville / De Stad',
    href: '/steun-stad-brussel',
    external: false,
  },
  {
    src: '/assets/partners/capital.svg',
    alt: 'Capital',
    href: 'https://nl.capitalbelgium.be/',
    external: true,
  },
  {
    src: '/assets/partners/n-brussel.svg',
    alt: 'N-Brussel',
    href: 'https://www.sportinbrussel.be/vgc-sportdienst',
    external: true,
  },
  {
    src: '/assets/partners/basketbal-vlaanderen.svg',
    alt: 'Basketbal Vlaanderen',
    href: 'https://www.basketbal.vlaanderen/',
    external: true,
  },
];

const partnerGroup = [
  ...partners,
  ...partners,
];

function PartnerLogo({ logo, clone = false, index }) {
  const content = (
    <div className="logo-slot">
      <img
        className="partner-logo"
        src={logo.src}
        alt={clone ? '' : logo.alt}
      />
    </div>
  );

  if (logo.external) {
    return (
      <a
        className="partner-link"
        href={logo.href}
        target="_blank"
        rel="noreferrer"
        aria-label={clone ? undefined : `Bezoek ${logo.alt}`}
        tabIndex={clone ? -1 : 0}
        key={`${clone ? 'clone' : 'main'}-${logo.src}-${index}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      className="partner-link"
      to={logo.href}
      aria-label={clone ? undefined : `Meer informatie over ${logo.alt}`}
      tabIndex={clone ? -1 : 0}
      key={`${clone ? 'clone' : 'main'}-${logo.src}-${index}`}
    >
      {content}
    </Link>
  );
}

function PartnerGroup({ clone = false }) {
  return (
    <div
      className="partner-carousel-group"
      aria-hidden={clone ? 'true' : undefined}
    >
      {partnerGroup.map((logo, index) => (
        <PartnerLogo
          key={`${clone ? 'clone' : 'main'}-${logo.src}-${index}`}
          logo={logo}
          clone={clone}
          index={index}
        />
      ))}
    </div>
  );
}

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
            <PartnerGroup />
            <PartnerGroup clone />
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
              <span>ZO</span>
              <strong>11</strong>
              <span>OKT</span>
            </div>

            <div className="featured-team">
              <div className="opponent-placeholder large">
                RD
              </div>

              <div>
                <strong>
                  Red Dragons Huldenberg
                </strong>

                <span>
                  J18 A
                </span>
              </div>
            </div>

            <div className="featured-vs">
              VS
            </div>

            <div className="featured-team bnb-team">
              <img
                src="/assets/bnb-logo-green.png"
                alt="Brussel Noord Basket"
              />

              <div>
                <strong>
                  Brussel Noord Basket
                </strong>

                <span>
                  J18 A
                </span>
              </div>
            </div>

            <div className="featured-info">
              <span>
                <Clock3 size={18} />
                16:00
              </span>

              <span>
                <MapPin size={18} />
                Sporthal De Kronkel
              </span>

              <span>
                <CalendarDays size={18} />
                U18 Niveau 4
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