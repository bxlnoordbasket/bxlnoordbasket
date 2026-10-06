import {
  ArrowLeft,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

import {
  useTranslation,
} from 'react-i18next';

export default function BrusselsSupport() {
  const {
    t,
  } = useTranslation();

  return (
    <section className="section-dark support-page">
      <div className="page-width support-page-inner">
        <Link
          to="/"
          className="button button-outline support-back-button"
        >
          <ArrowLeft
            size={18}
          />

          {t(
            'supportPage.back'
          )}
        </Link>

        <div className="support-page-content">
          <img
            src="/assets/partners/bxl-ville-de-stad.svg"
            alt="Brussel - La Ville / De Stad"
            className="support-page-logo"
          />

          <span className="eyebrow">
            {t(
              'supportPage.eyebrow'
            )}
          </span>

          <p>
            {t(
              'supportPage.text'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}