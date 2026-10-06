import {
  Link,
} from 'react-router-dom';

import {
  ArrowLeft,
} from 'lucide-react';

import {
  useTranslation,
} from 'react-i18next';

export default function Privacy() {
  const {
    t,
  } = useTranslation();

  return (
    <section className="section-light legal-page">
      <div className="page-width legal-page-inner">
        <Link
          to="/"
          className="legal-back-link"
        >
          <ArrowLeft
            size={18}
          />

          {t(
            'privacy.back'
          )}
        </Link>

        <span className="eyebrow">
          {t(
            'privacy.eyebrow'
          )}
        </span>

        <h1>
          {t(
            'privacy.title'
          )}
        </h1>

        <p className="legal-intro">
          {t(
            'privacy.intro'
          )}
        </p>

        <div className="legal-content">
          <section>
            <h2>
              {t(
                'privacy.s1.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s1.controller'
              )}{' '}

              <strong>
                Brussel Noord Basket vzw
              </strong>.
            </p>

            <p>
              {t(
                'privacy.s1.seat'
              )}

              <br />

              {t(
                'privacy.s1.company'
              )}{' '}

              <strong>
                1039.061.822
              </strong>

              <br />

              {t(
                'privacy.s1.email'
              )}{' '}

              <a href="mailto:bxlnoordbasket@gmail.com">
                bxlnoordbasket@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s2.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s2.intro'
              )}
            </p>

            <ul>
              <li>
                {t(
                  'privacy.s2.i1'
                )}
              </li>

              <li>
                {t(
                  'privacy.s2.i2'
                )}
              </li>

              <li>
                {t(
                  'privacy.s2.i3'
                )}
              </li>

              <li>
                {t(
                  'privacy.s2.i4'
                )}
              </li>

              <li>
                {t(
                  'privacy.s2.i5'
                )}
              </li>
            </ul>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s3.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s3.p1'
              )}
            </p>

            <p>
              {t(
                'privacy.s3.p2'
              )}
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s4.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s4.p1'
              )}
            </p>

            <p>
              {t(
                'privacy.s4.p2'
              )}
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s5.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s5.p1'
              )}
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s6.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s6.p1'
              )}
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s7.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s7.p1'
              )}
            </p>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s8.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s8.p1'
              )}
            </p>

            <p>
              {t(
                'privacy.s8.emailBefore'
              )}{' '}

              <a href="mailto:bxlnoordbasket@gmail.com">
                bxlnoordbasket@gmail.com
              </a>.
            </p>

            <p>
              {t(
                'privacy.s8.p3'
              )}
            </p>

            <a
              href="https://www.dataprotectionauthority.be/"
              target="_blank"
              rel="noreferrer"
            >
              {t(
                'privacy.s8.authority'
              )}
            </a>
          </section>

          <section>
            <h2>
              {t(
                'privacy.s9.title'
              )}
            </h2>

            <p>
              {t(
                'privacy.s9.p1'
              )}
            </p>

            <p>
              {t(
                'privacy.s9.updated'
              )}
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}