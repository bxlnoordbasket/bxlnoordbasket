import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  Send,
} from 'lucide-react';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT;

function InstagramIcon({ size = 18 }) {
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
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }) {
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
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      setErrorMessage(
        'Het contactformulier is momenteel niet beschikbaar. Stuur ons rechtstreeks een e-mail via bxlnoordbasket@gmail.com.'
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        setStatus('success');
        return;
      }

      if (response.status === 429) {
        setStatus('error');
        setErrorMessage(
          'Dit formulier werkt momenteel niet. Je bent altijd welkom om ons een e-mail te sturen via bxlnoordbasket@gmail.com.'
        );
        return;
      }

      setStatus('error');
      setErrorMessage(
        'Het bericht kon niet worden verzonden. Probeer het later opnieuw of stuur ons rechtstreeks een e-mail via bxlnoordbasket@gmail.com.'
      );
    } catch {
      setStatus('error');
      setErrorMessage(
        'Het bericht kon niet worden verzonden. Controleer je internetverbinding of stuur ons rechtstreeks een e-mail via bxlnoordbasket@gmail.com.'
      );
    }
  }

  return (
    <>
      <section className="subpage-hero contact-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            CONTACT
          </span>

          <h1>
            NEEM CONTACT
            <br />
            <span>MET ONS OP.</span>
          </h1>

          <p>
            Een vraag over trainingen, wedstrijden, lidmaatschap
            of onze club? Stuur ons gerust een bericht.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="page-width contact-layout">
          <aside className="contact-info-panel">
            <span className="eyebrow">
              CONTACTGEGEVENS
            </span>

            <h2>
              WE HOREN GRAAG VAN JE.
            </h2>

            <p>
              Heb je een vraag over Brussel Noord Basket?
              Neem contact met ons op via e-mail of sociale media.
            </p>

            <div className="contact-detail-list">
              <a href="mailto:bxlnoordbasket@gmail.com">
                <Mail size={20} />

                <span>
                  <small>E-mail</small>
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
            onSubmit={handleSubmit}
          >
            <div className="form-title">
              <span className="eyebrow">
                STUUR EEN BERICHT
              </span>

              <h2>
                NEEM CONTACT OP.
              </h2>
            </div>

            <div className="form-grid">
              <label>
                Naam
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  disabled={status === 'loading'}
                />
              </label>

              <label>
                E-mail
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  disabled={status === 'loading'}
                />
              </label>
            </div>

            <label>
              Onderwerp
              <input
                type="text"
                name="subject"
                required
                disabled={status === 'loading'}
              />
            </label>

            <label>
              Bericht
              <textarea
                name="message"
                rows="7"
                required
                disabled={status === 'loading'}
              />
            </label>

            <button
              className="button button-green form-submit"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading'
                ? 'Verzenden...'
                : 'Verstuur bericht'}

              <Send size={18} />
            </button>

            <p className="form-privacy-note">
              We gebruiken je gegevens alleen om je bericht
              te behandelen en eventuele opvolging te doen.
              Lees onze{' '}
              <Link to="/privacy">
                privacyverklaring
              </Link>.
            </p>

            {status === 'success' && (
              <div className="form-message form-message-success">
                <CheckCircle2 size={20} />

                <div>
                  <strong>Bericht verzonden.</strong>
                  <p>
                    Bedankt voor je bericht. We nemen zo snel
                    mogelijk contact met je op.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="form-message form-message-error">
                <AlertCircle size={20} />

                <div>
                  <strong>
                    Verzenden mislukt.
                  </strong>

                  <p>
                    {errorMessage}
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
