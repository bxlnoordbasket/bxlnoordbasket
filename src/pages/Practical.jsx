import {
  CalendarDays,
  Clock3,
  MapPin,
} from 'lucide-react';

import SectionHeader from '../components/SectionHeader';

const matches = [
  {
    day: 'ZA',
    date: '16 NOV',
    homeTeam: 'Brussel Noord Basket',
    homeCategory: 'U18',
    opponentTeam: 'Molenbeek Rebels',
    opponentCategory: 'U18',
    time: '14:30',
    location: 'Sporthal Neder-Over-Heembeek',
  },
  {
    day: 'ZO',
    date: '24 NOV',
    homeTeam: 'Brussel Noord Basket',
    homeCategory: 'U18',
    opponentTeam: 'Ganshoren',
    opponentCategory: 'U18',
    time: '16:00',
    location: 'Brussel',
  },
  {
    day: 'ZA',
    date: '30 NOV',
    homeTeam: 'Brussel Noord Basket',
    homeCategory: 'U18',
    opponentTeam: 'Royal IV',
    opponentCategory: 'U18',
    time: '18:00',
    location: 'Brussel',
  },
];

export default function Praktisch() {
  return (
    <>
      {/* HERO */}
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

                  {/* BNB */}
                  <div className="match-team">
                    <img
                      src="/assets/bnb-logo-green.png"
                      alt="Brussel Noord Basket"
                    />

                    <div className="team-label">
                      <div className="team-name">
                        {match.homeTeam}
                      </div>

                      <div className="team-category">
                        {match.homeCategory}
                      </div>
                    </div>
                  </div>

                  {/* VS */}
                  <div className="vs">
                    VS
                  </div>

                  {/* TEGENSTANDER */}
                  <div className="match-team">
                    <div className="opponent-placeholder">
                      VS
                    </div>

                    <div className="team-label">
                      <div className="team-name">
                        {match.opponentTeam}
                      </div>

                      <div className="team-category">
                        {match.opponentCategory}
                      </div>
                    </div>
                  </div>

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