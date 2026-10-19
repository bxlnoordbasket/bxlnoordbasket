import {
  CalendarDays,
  Clock3,
  MapPin,
} from 'lucide-react';

import {
  useTranslation,
} from 'react-i18next';

import SectionHeader from '../components/SectionHeader';

const matches = [
  {
    dayKey:
      'practical.matches.sat',

    number:
      '07',

    month:
      'NOV',

    homeTeam:
      'Bct Overijse',

    homeCategory:
      'J18 B',

    awayTeam:
      'Brussel Noord Basket',

    awayCategory:
      'J18 A',

    time:
      '13:00',

    location:
      'Gemeentelijk Sporthal Overijse Den Heurk',

    bnbSide:
      'away',
  },

  {
    dayKey:
      'practical.matches.sun',

    number:
      '15',

    month:
      'NOV',

    homeTeam:
      'Brussel Noord Basket',

    homeCategory:
      'J18 A',

    awayTeam:
      'Bct Overijse',

    awayCategory:
      'J18 B',

    time:
      '12:45',

    location:
      'Pleinlaan',

    bnbSide:
      'home',
  },

  {
    dayKey:
      'practical.matches.sat',

    number:
      '21',

    month:
      'NOV',

    homeTeam:
      'Basket Groot Zemst',

    homeCategory:
      'J18 B',

    awayTeam:
      'Brussel Noord Basket',

    awayCategory:
      'J18 A',

    time:
      '17:00',

    location:
      'Den Turfpuf',

    bnbSide:
      'away',
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
  const {
    t,
  } = useTranslation();

  return (
    <>
      <section className="subpage-hero practical-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            {t(
              'practical.hero.eyebrow'
            )}
          </span>

          <h1>
            {t(
              'practical.hero.titleLine1'
            )}

            <br />

            <span>
              {t(
                'practical.hero.titleLine2'
              )}
            </span>
          </h1>

          <p>
            {t(
              'practical.hero.description'
            )}
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-width">
          <SectionHeader
            eyebrow={t(
              'practical.matches.eyebrow'
            )}
            title={t(
              'practical.matches.title'
            )}
          />

          <div className="three-column-grid">
            {matches.map(
              (
                match,
                index
              ) => (
                <article
                  className="match-card compact"
                  key={`${match.number}-${index}`}
                >
                  <div className="match-date">
                    <CalendarDays
                      size={18}
                    />

                    {t(
                      match.dayKey
                    )}{' '}

                    {match.number}{' '}

                    {match.month}
                  </div>

                  <div className="match-teams">
                    <Team
                      name={
                        match.homeTeam
                      }
                      category={
                        match.homeCategory
                      }
                      isBnb={
                        match.bnbSide ===
                        'home'
                      }
                    />

                    <div className="vs">
                      VS
                    </div>

                    <Team
                      name={
                        match.awayTeam
                      }
                      category={
                        match.awayCategory
                      }
                      isBnb={
                        match.bnbSide ===
                        'away'
                      }
                    />
                  </div>

                  <div className="match-meta">
                    <span>
                      <Clock3
                        size={17}
                      />

                      {
                        match.time
                      }
                    </span>

                    <span>
                      <MapPin
                        size={17}
                      />

                      {
                        match.location
                      }
                    </span>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width">
          <SectionHeader
            eyebrow={t(
              'practical.training.eyebrow'
            )}
            title={t(
              'practical.training.title'
            )}
          />

          <div className="training-panel">
            <div className="training-table">
              <div className="training-row training-head">
                <span>
                  {t(
                    'practical.training.day'
                  )}
                </span>

                <span>
                  {t(
                    'practical.training.location'
                  )}
                </span>

                <span>
                  {t(
                    'practical.training.hours'
                  )}
                </span>
              </div>

              <div className="training-row">
                <strong>
                  {t(
                    'practical.training.tuesday'
                  )}
                </strong>

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
                <strong>
                  {t(
                    'practical.training.friday'
                  )}
                </strong>

                <span>
                  Hoofdstedelijk Atheneum Karel Buls
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