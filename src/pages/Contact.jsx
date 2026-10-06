import {
  useState,
} from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  AlertCircle,
  CheckCircle2,
  Mail,
  Send,
} from 'lucide-react';

import {
  useTranslation,
} from 'react-i18next';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT;

function InstagramIcon({
  size = 18,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      <circle
        cx="17.4"
        cy="6.6"
        r="1.1"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({
  size = 18,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10H8v3h2.8v8h2.9Z" />
    </svg>
  );
}

export default function Contact() {
  const {
    t,
  } = useTranslation();

  const [
    status,
    setStatus,
  ] = useState(
    'idle'
  );

  const [
    errorKey,
    setErrorKey,
  ] = useState(
    ''
  );

  async function handleSubmit(
    event
  ) {
    event.preventDefault();

    if (
      !FORMSPREE_ENDPOINT
    ) {
      setStatus(
        'error'
      );

      setErrorKey(
        'contact.form.unavailable'
      );

      return;
    }

    const form =
      event.currentTarget;

    const formData =
      new FormData(
        form
      );

    setStatus(
      'loading'
    );

    setErrorKey(
      ''
    );

    try {
      const response =
        await fetch(
          FORMSPREE_ENDPOINT,
          {
            method:
              'POST',

            body:
              formData,

            headers: {
              Accept:
                'application/json',
            },
          }
        );

      if (
        response.ok
      ) {
        form.reset();

        setStatus(
          'success'
        );

        return;
      }

      if (
        response.status ===
        429
      ) {
        setStatus(
          'error'
        );

        setErrorKey(
          'contact.form.rateLimit'
        );

        return;
      }

      setStatus(
        'error'
      );

      setErrorKey(
        'contact.form.failed'
      );
    } catch {
      setStatus(
        'error'
      );

      setErrorKey(
        'contact.form.network'
      );
    }
  }

  return (
    <>
      <section className="subpage-hero contact-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            {t(
              'contact.hero.eyebrow'
            )}
          </span>

          <h1>
            {t(
              'contact.hero.titleLine1'
            )}

            <br />

            <span>
              {t(
                'contact.hero.titleLine2'
              )}
            </span>
          </h1>

          <p>
            {t(
              'contact.hero.description'
            )}
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width contact-layout">
          <aside className="contact-info-panel">
            <span className="eyebrow">
              {t(
                'contact.info.eyebrow'
              )}
            </span>

            <h2>
              {t(
                'contact.info.title'
              )}
            </h2>

            <p>
              {t(
                'contact.info.description'
              )}
            </p>

            <div className="contact-detail-list">
              <a href="mailto:bxlnoordbasket@gmail.com">
                <Mail
                  size={20}
                />

                <span>
                  <small>
                    {t(
                      'contact.info.email'
                    )}
                  </small>

                  <strong>
                    bxlnoordbasket@gmail.com
                  </strong>
                </span>
              </a>
            </div>

            <div className="social-row">
              <a
                href="https://www.instagram.com/brusselnoordbasket/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />

                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61590572720599&sk=followers"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon />

                Facebook
              </a>
            </div>
          </aside>

          <form
            className="contact-form"
            onSubmit={
              handleSubmit
            }
          >
            <div className="form-title">
              <span className="eyebrow">
                {t(
                  'contact.form.eyebrow'
                )}
              </span>

              <h2>
                {t(
                  'contact.form.title'
                )}
              </h2>
            </div>

            <div className="form-grid">
              <label>
                {t(
                  'contact.form.name'
                )}

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  disabled={
                    status ===
                    'loading'
                  }
                />
              </label>

              <label>
                {t(
                  'contact.form.email'
                )}

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled={
                    status ===
                    'loading'
                  }
                />
              </label>
            </div>

            <label>
              {t(
                'contact.form.subject'
              )}

              <input
                type="text"
                name="subject"
                required
                disabled={
                  status ===
                  'loading'
                }
              />
            </label>

            <label>
              {t(
                'contact.form.message'
              )}

              <textarea
                name="message"
                rows="7"
                required
                disabled={
                  status ===
                  'loading'
                }
              />
            </label>

            <button
              className="button button-green form-submit"
              type="submit"
              disabled={
                status ===
                'loading'
              }
            >
              {status ===
              'loading'
                ? t(
                    'contact.form.sending'
                  )
                : t(
                    'contact.form.send'
                  )}

              <Send
                size={18}
              />
            </button>

            <p className="form-privacy-note">
              {t(
                'contact.form.privacyBefore'
              )}{' '}

              <Link to="/privacy">
                {t(
                  'contact.form.privacyLink'
                )}
              </Link>.
            </p>

            {status ===
              'success' && (
              <div className="form-message form-message-success">
                <CheckCircle2
                  size={20}
                />

                <div>
                  <strong>
                    {t(
                      'contact.form.successTitle'
                    )}
                  </strong>

                  <p>
                    {t(
                      'contact.form.successText'
                    )}
                  </p>
                </div>
              </div>
            )}

            {status ===
              'error' && (
              <div className="form-message form-message-error">
                <AlertCircle
                  size={20}
                />

                <div>
                  <strong>
                    {t(
                      'contact.form.errorTitle'
                    )}
                  </strong>

                  <p>
                    {t(
                      errorKey
                    )}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}