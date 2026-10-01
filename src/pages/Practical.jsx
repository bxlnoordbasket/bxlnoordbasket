import {
  CalendarDays,
  Clock3,
  MapPin,
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';

const matches = [
  {
    day: 'ZO',
    date: '11 OKT',
    homeTeam: 'Red Dragons Huldenberg',
    homeCategory: 'J18 A',
    awayTeam: 'Brussel Noord Basket',
    awayCategory: 'J18 A',
    time: '16:00',
    location: 'Sporthal De Kronkel',
    bnbSide: 'away',
  },
  {
    day: 'ZA',
    date: '17 OKT',
    homeTeam: 'Brussel Noord Basket',
    homeCategory: 'J18 A',
    awayTeam: 'Dynamo Bertem',
    awayCategory: 'J18 B',
    time: '15:30',
    location: 'Sporthal Emanuel Hiel',
    bnbSide: 'home',
  },
  {
    day: 'ZO',
    date: '25 OKT',
    homeTeam: 'Brussel Noord Basket',
    homeCategory: 'J18 A',
    awayTeam: 'KYD Kortenberg Young Devils',
    awayCategory: 'J18 A',
    time: '12:30',
    location: 'Sportcentrum Noordpool',
    bnbSide: 'home',
  },
];

function Team({
  name,
  category,
  isBnb,
}) {
  return (
    <div className="match-team">
      {isBnb ? (
        <img
          src="/assets/bnb-logo-green.png"
          alt="Brussel Noord Basket"
        />
      ) : (
        <div className="opponent-placeholder">
          VS
        </div>
      )}

      <div className="team-label">
        <div className="team-name">
          {name}
        </div>

        <div className="team-category">
          {category}
        </div>
      </div>
    </div>
  );
}

export default function Practical() {
  return (
    <>
      <section className="subpage-hero practical-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            PRAKTISCHE INFO
          </span>

          <h1>
            ALLES WAT JE
            <br />
            <span>MOET WETEN</span>
          </h1>

          <p>
            Vind hier onze komende wedstrijden,
            trainingsuren en trainingslocaties.
          </p>
        </div>
      </section>

      {/* KOMENDE MATCHEN */}
      <section className="section-dark">
        <div className="page-width">
          <SectionHeader
            eyebrow="WEDSTRIJDEN"
            title="Komende matchen"
          />

          <div className="three-column-grid">
            {matches.map((match, index) => (
              <article
                className="match-card compact"
                key={`${match.date}-${index}`}
              >
                <div className="match-date">
                  <CalendarDays size={18} />
                  {match.day} {match.date}
                </div>

                <div className="match-teams">
                  <Team
                    name={match.homeTeam}
                    category={match.homeCategory}
                    isBnb={match.bnbSide === 'home'}
                  />

                  <div className="vs">
                    VS
                  </div>

                  <Team
                    name={match.awayTeam}
                    category={match.awayCategory}
                    isBnb={match.bnbSide === 'away'}
                  />
                </div>

                <div className="match-meta">
                  <span>
                    <Clock3 size={17} />
                    {match.time}
                  </span>

                  <span>
                    <MapPin size={17} />
                    {match.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRAININGEN */}
      <section className="section-light">
        <div className="page-width">
          <SectionHeader
            eyebrow="TRAININGEN"
            title="Wanneer trainen we?"
          />

          <div className="training-panel">
            <div className="training-table">
              <div className="training-row training-head">
                <span>Dag</span>
                <span>Locatie</span>
                <span>Uren</span>
              </div>

              <div className="training-row">
                <strong>Dinsdag</strong>

                <span>
                  Sport- en Cultureelcentrum Noordpool
                  <br />
                  Antwerpsesteenweg 208, 1000 Brussel
                </span>

                <span>
                  17:00 – 19:00
                </span>
              </div>

              <div className="training-row">
                <strong>Vrijdag</strong>

                <span>
                  Karel Buls middelbareschool
                  <br />
                  Mutsaardlaan 67, Brussel
                </span>

                <span>
                  17:00 – 19:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}