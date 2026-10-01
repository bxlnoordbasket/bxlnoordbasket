import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  Heart,
  Target,
} from 'lucide-react';

import '../about-page.css';

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="subpage-hero about-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            OVER BNB
          </span>

          <h1>
            MEER DAN
            <br />
            <span>BASKETBAL.</span>
          </h1>

          <p>
            Brussel Noord Basket is ontstaan uit een groep Brusselse
            jongeren die hun plek om samen te sporten niet zomaar
            wilden opgeven.
          </p>
        </div>
      </section>

      {/* ONS VERHAAL */}
      <section className="section-light">
        <div className="page-width about-story-grid">

          <div className="about-photo-wrap">
            <img
              src="/assets/training.jpg"
              alt="Basketbaltraining bij Brussel Noord Basket"
            />

            <div className="green-corner" />
          </div>

          <div className="about-copy">
            <span className="eyebrow">
              ONS VERHAAL
            </span>

            <h2>
              VAN EEN GROEP JONGEREN
              NAAR EEN EIGEN CLUB.
            </h2>

            <p>
              Het verhaal van Brussel Noord Basket begon niet met
              een groot plan, maar met een groep jongeren uit de
              Brusselse Noordwijk die vooral één ding wilden:
              blijven basketten.
            </p>

            <p>
              Twee jaar geleden hield de basketbalclub waar de groep
              speelde plots op te bestaan. Daarmee dreigden niet
              alleen hun trainingen en wedstrijden te verdwijnen,
              maar ook een plek waar ze elkaar meerdere keren per
              week ontmoetten.
            </p>

            <p>
              Onder impuls van Cas, toen 18 jaar, slaagde de groep
              erin om de zaal tijdelijk te behouden. Een jaar lang
              konden de jongeren er vrij blijven trainen. Maar hun
              ambitie ging verder dan af en toe samen basketten.
              Ze wilden opnieuw wedstrijden spelen, samen groeien
              en vooral hun eigen club uitbouwen.
            </p>

            <p>
              In de zomer van 2026 werd daarom
              Brussel Noord Basket opgericht.
              Wat begon als het initiatief van een groep vrienden,
              groeide uit tot een officiële basketbalclub.
            </p>
          </div>

        </div>
      </section>

      {/* VAN IDEE NAAR CLUB */}
      <section className="section-dark">
        <div className="page-width">
          <div className="section-header">
            <div>
              <span className="eyebrow">
                VAN IDEE NAAR CLUB
              </span>

              <h2>
                BNB STAAT ER.
              </h2>
            </div>
          </div>

          <div className="values-grid">

            <article className="value-card">
              <Users />

              <h3>
                Een eigen ploeg
              </h3>

              <p>
                Brussel Noord Basket startte het seizoen met een
                U18-ploeg. De club neemt officieel deel aan de
                competities van Basketbal Vlaanderen.
              </p>
            </article>

            <article className="value-card">
              <Heart />

              <h3>
                Erkend in Brussel
              </h3>

              <p>
                BNB is ondertussen ook erkend als sportclub door
                de Vlaamse Gemeenschapscommissie. Een belangrijke
                stap in de verdere uitbouw van onze werking.
              </p>
            </article>

            <article className="value-card">
              <Target />

              <h3>
                Blijven groeien
              </h3>

              <p>
                Onze ambitie is om vanuit de huidige U18-ploeg
                verder te groeien naar een bredere basketbalwerking
                waar nog meer Brusselse jongeren een plaats vinden.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* VOOR EN DOOR JONGEREN */}
      <section className="section-light youth-section">
        <div className="page-width youth-content">

          <span className="eyebrow">
            VOOR EN DOOR JONGEREN
          </span>

          <h2>
            EEN CLUB DIE JONGEREN
            <br />
            ZELF MEE UITBOUWEN.
          </h2>

          <div className="youth-copy">
            <p>
              Voor Brussel Noord Basket gaat het niet alleen om
              wat er op het veld gebeurt. We willen jongeren ook
              verantwoordelijkheid geven over hun eigen club,
              dromen en toekomst.
            </p>

            <p>
              Daarom willen we spelers de kans geven om zich verder
              te ontwikkelen als scheidsrechter, coach of zelfs
              bestuurslid. Zo bouwen jongeren niet alleen mee aan
              een basketbalploeg, maar ook aan de organisatie
              erachter.
            </p>

            <p>
              De vraag naar plaatsen om te sporten is groot in
              Brussel, terwijl de beschikbare ruimte beperkt is.
              Met BNB willen we zelf mee een antwoord bieden:
              een toegankelijke club waar jongeren kunnen sporten,
              elkaar ontmoeten en samen iets opbouwen.
            </p>
          </div>

          <Link
            className="button button-green youth-contact-button"
            to="/contact"
          >
            Neem contact op
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

      {/* STEUN BNB */}
      <section className="section-dark">
        <div className="page-width split-cta">

          <div>
            <span className="eyebrow">
              HELP BNB GROEIEN
            </span>

            <h2>
              SAMEN BOUWEN WE
              VERDER AAN DE CLUB.
            </h2>

            <p>
              Een basketbalclub uitbouwen vraagt meer dan alleen
              motivatie. Zaalhuur, materiaal, wedstrijdtruitjes,
              coaches en scheidsrechters brengen allemaal kosten
              met zich mee.
            </p>

            <p>
              Met de steun van onze leden, partners en supporters
              willen we Brussel Noord Basket verder laten groeien
              en meer Brusselse jongeren de kans geven om te
              basketten.
            </p>
          </div>

          <a
            className="button button-green"
            href="https://steunactie.be/actie/steun-brussel-noord-basket/-76097"
            target="_blank"
            rel="noreferrer"
          >
            Steun BNB
            <ArrowRight size={18} />
          </a>

        </div>
      </section>
    </>
  );
}