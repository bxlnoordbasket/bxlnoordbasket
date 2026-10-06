import {
  Link,
} from 'react-router-dom';

import {
  ArrowRight,
  Users,
  Heart,
  Target,
} from 'lucide-react';

import {
  useTranslation,
} from 'react-i18next';

import '../about-page.css';

export default function About() {
  const {
    t,
  } = useTranslation();

  return (
    <>
      <section className="subpage-hero about-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            {t(
              'about.hero.eyebrow'
            )}
          </span>

          <h1>
            {t(
              'about.hero.titleLine1'
            )}

            <br />

            <span>
              {t(
                'about.hero.titleLine2'
              )}
            </span>
          </h1>

          <p>
            {t(
              'about.hero.description'
            )}
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width about-story-grid">
          <div className="about-photo-wrap">
            <img
              src="/assets/training.jpg"
              alt={t(
                'about.story.imageAlt'
              )}
            />

            <div className="green-corner" />
          </div>

          <div className="about-copy">
            <span className="eyebrow">
              {t(
                'about.story.eyebrow'
              )}
            </span>

            <h2>
              {t(
                'about.story.title'
              )}
            </h2>

            <p>
              {t(
                'about.story.p1'
              )}
            </p>

            <p>
              {t(
                'about.story.p2'
              )}
            </p>

            <p>
              {t(
                'about.story.p3'
              )}
            </p>

            <p>
              {t(
                'about.story.p4'
              )}
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-width">
          <div className="section-header">
            <div>
              <span className="eyebrow">
                {t(
                  'about.club.eyebrow'
                )}
              </span>

              <h2>
                {t(
                  'about.club.title'
                )}
              </h2>
            </div>
          </div>

          <div className="values-grid">
            <article className="value-card">
              <Users />

              <h3>
                {t(
                  'about.club.teamTitle'
                )}
              </h3>

              <p>
                {t(
                  'about.club.teamText'
                )}
              </p>
            </article>

            <article className="value-card">
              <Heart />

              <h3>
                {t(
                  'about.club.recognizedTitle'
                )}
              </h3>

              <p>
                {t(
                  'about.club.recognizedText'
                )}
              </p>
            </article>

            <article className="value-card">
              <Target />

              <h3>
                {t(
                  'about.club.growTitle'
                )}
              </h3>

              <p>
                {t(
                  'about.club.growText'
                )}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-light youth-section">
        <div className="page-width youth-content">
          <span className="eyebrow">
            {t(
              'about.youth.eyebrow'
            )}
          </span>

          <h2>
            {t(
              'about.youth.titleLine1'
            )}

            <br />

            {t(
              'about.youth.titleLine2'
            )}
          </h2>

          <div className="youth-copy">
            <p>
              {t(
                'about.youth.p1'
              )}
            </p>

            <p>
              {t(
                'about.youth.p2'
              )}
            </p>

            <p>
              {t(
                'about.youth.p3'
              )}
            </p>
          </div>

          <Link
            className="button button-green youth-contact-button"
            to="/contact"
          >
            {t(
              'about.youth.contact'
            )}

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </section>

      <section className="section-dark">
        <div className="page-width split-cta">
          <div>
            <span className="eyebrow">
              {t(
                'about.support.eyebrow'
              )}
            </span>

            <h2>
              {t(
                'about.support.title'
              )}
            </h2>

            <p>
              {t(
                'about.support.p1'
              )}
            </p>

            <p>
              {t(
                'about.support.p2'
              )}
            </p>
          </div>

          <a
            className="button button-green"
            href="https://steunactie.be/actie/steun-brussel-noord-basket/-76097"
            target="_blank"
            rel="noreferrer"
          >
            {t(
              'about.support.button'
            )}

            <ArrowRight
              size={18}
            />
          </a>
        </div>
      </section>
    </>
  );
}