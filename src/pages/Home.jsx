import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MapPin,
  CalendarDays,
  Clock3,
} from 'lucide-react';

import {
  useTranslation,
} from 'react-i18next';

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

function PartnerLogo({
  logo,
  clone = false,
  index,
  t,
}) {
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
        aria-label={
          clone
            ? undefined
            : t(
                'home.partners.visit',
                {
                  name: logo.alt,
                }
              )
        }
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
      aria-label={
        clone
          ? undefined
          : t(
              'home.partners.more',
              {
                name: logo.alt,
              }
            )
      }
      tabIndex={clone ? -1 : 0}
      key={`${clone ? 'clone' : 'main'}-${logo.src}-${index}`}
    >
      {content}
    </Link>
  );
}

function PartnerGroup({
  clone = false,
  t,
}) {
  return (
    <div
      className="partner-carousel-group"
      aria-hidden={
        clone
          ? 'true'
          : undefined
      }
    >
      {partnerGroup.map(
        (logo, index) => (
          <PartnerLogo
            key={`${clone ? 'clone' : 'main'}-${logo.src}-${index}`}
            logo={logo}
            clone={clone}
            index={index}
            t={t}
          />
        )
      )}
    </div>
  );
}

export default function Home() {
  const {
    t,
  } = useTranslation();

  return (
    <>
      <section className="home-hero hero-photo-section">
        <div className="hero-overlay" />

        <div className="page-width hero-content">
          <span className="eyebrow">
            {t(
              'home.hero.eyebrow'
            )}
          </span>

          <h1>
            <span>
              BRUSSEL NOORD
            </span>

            <br />

            BASKET
          </h1>

          <p>
            {t(
              'home.hero.description'
            )}
          </p>

          <div className="hero-actions">
            <Link
              className="button button-green"
              to="/praktisch"
            >
              {t(
                'home.hero.practicalButton'
              )}

              <ArrowRight
                size={18}
              />
            </Link>

            <Link
              className="button button-outline"
              to="/contact"
            >
              {t(
                'common.contact'
              )}

              <ArrowRight
                size={18}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="logo-carousel-section section-dark">
        <div className="page-width">
          <SectionHeader
            eyebrow={t(
              'home.partners.eyebrow'
            )}
            title={t(
              'home.partners.title'
            )}
          />
        </div>

        <div
          className="logo-marquee"
          aria-label={t(
            'home.partners.aria'
          )}
        >
          <div className="logo-track">
            <PartnerGroup
              t={t}
            />

            <PartnerGroup
              clone
              t={t}
            />
          </div>
        </div>
      </section>

      <section className="section-light next-match-home">
        <div className="page-width">
          <SectionHeader
            eyebrow={t(
              'home.nextMatch.eyebrow'
            )}
            title={t(
              'home.nextMatch.title'
            )}
          />

          <div className="featured-match">
            <div className="featured-date">
              <span>
                {t(
                  'home.nextMatch.day'
                )}
              </span>

              <strong>
                11
              </strong>

              <span>
                {t(
                  'home.nextMatch.month'
                )}
              </span>
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
                <Clock3
                  size={18}
                />

                16:00
              </span>

              <span>
                <MapPin
                  size={18}
                />

                Sporthal De Kronkel
              </span>

              <span>
                <CalendarDays
                  size={18}
                />

                {t(
                  'home.nextMatch.level'
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-practical-cta section-dark">
        <div className="page-width split-cta">
          <div>
            <span className="eyebrow">
              {t(
                'home.practical.eyebrow'
              )}
            </span>

            <h2>
              {t(
                'home.practical.title'
              )}
            </h2>

            <p>
              {t(
                'home.practical.description'
              )}
            </p>
          </div>

          <Link
            className="button button-green"
            to="/praktisch"
          >
            {t(
              'home.practical.button'
            )}

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </section>
    </>
  );
}