import {
  ArrowLeft,
  Mail,
} from 'lucide-react';

import {
  Link,
} from 'react-router-dom';

import {
  useTranslation,
} from 'react-i18next';

export default function NotFound() {
  const {
    t,
  } = useTranslation();

  return (
    <section className="not-found-page">
      <div className="page-width not-found-content">
        <span className="not-found-code">
          404
        </span>

        <span className="eyebrow">
          {t(
            'notFound.eyebrow'
          )}
        </span>

        <h1>
          {t(
            'notFound.titleLine1'
          )}

          <br />

          <span>
            {t(
              'notFound.titleLine2'
            )}
          </span>
        </h1>

        <p>
          {t(
            'notFound.description'
          )}
        </p>

        <div className="not-found-actions">
          <Link
            className="button button-green"
            to="/"
          >
            <ArrowLeft
              size={18}
            />

            {t(
              'notFound.back'
            )}
          </Link>

          <Link
            className="button button-outline"
            to="/contact"
          >
            <Mail
              size={18}
            />

            {t(
              'notFound.contact'
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}