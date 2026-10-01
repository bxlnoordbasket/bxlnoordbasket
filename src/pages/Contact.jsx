import { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT;

function InstagramIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
        cx="17.5"
        cy="6.5"
        r="1.25"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.5 22v-9h3l.5-3h-3.5V8.2c0-.9.3-1.7 1.8-1.7H17V3.8c-.4-.1-1.5-.2-2.7-.2-2.7 0-4.6 1.7-4.6 4.8V10H7v3h2.7v9h3.8Z" />
    </svg>
  );
}

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorType, setErrorType] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus('loading');
    setErrorType(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      // Bericht succesvol verzonden
      if (response.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      // Formspree limiet bereikt
      if (response.status === 429) {
        setStatus('error');
        setErrorType('limit');
        return;
      }

      // Andere fout van Formspree
      setStatus('error');
      setErrorType('general');
    } catch (error) {
      // Geen verbinding / netwerkprobleem
      setStatus('error');
      setErrorType('network');
    }
  }

  return (
    <>
      {/* HERO */}
      <section className="subpage-hero contact-hero">
        <div className="page-width subpage-hero-content">
          <span className="eyebrow">
            CONTACT
          </span>

          <h1>
            WE HELPEN JE
            <br />
            <span>GRAAG VERDER</span>
          </h1>

          <p>
            Vragen over trainingen, lidmaatschap,
            wedstrijden of de club? Neem gerust
            contact met ons op.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-light">
        <div className="page-width contact-layout">

          {/* CONTACT INFO */}
          <div className="contact-info-panel">
            <span className="eyebrow">
              CONTACT
            </span>

            <h2>
              Neem contact op.
            </h2>

            <p>
              Heb je een vraag over onze werking,
              trainingen, wedstrijden of lidmaatschap?
              We helpen je graag verder.
            </p>

            <div className="contact-detail-list">
              <a href="mailto:bxlnoordbasket@gmail.com">
                <Mail />

                <span>
                  <strong>E-mail</strong>
                  bxlnoordbasket@gmail.com
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
          </div>

          {/* FORMULIER */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-title">
              <span className="eyebrow">
                STUUR EEN BERICHT
              </span>

              <h2>
                Contactformulier
              </h2>
            </div>

            <div className="form-grid">
              <label>
                Naam

                <input
                  name="name"
                  type="text"
                  placeholder="Jouw naam"
                  required
                  disabled={status === 'loading'}
                />
              </label>

              <label>
                E-mail

                <input
                  name="email"
                  type="email"
                  placeholder="jij@email.be"
                  required
                  disabled={status === 'loading'}
                />
              </label>
            </div>

            <label>
              Onderwerp

              <input
                name="subject"
                type="text"
                placeholder="Waarover heb je een vraag?"
                required
                disabled={status === 'loading'}
              />
            </label>

            <label>
              Bericht

              <textarea
                name="message"
                rows="7"
                placeholder="Schrijf hier je bericht..."
                required
                disabled={status === 'loading'}
              />
            </label>

            <button
              className="button button-green form-submit"
              type="submit"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Verzenden...'
              ) : (
                <>
                  Verzenden
                  <Send size={18} />
                </>
              )}
            </button>

            {/* SUCCES */}
            {status === 'success' && (
              <div className="form-message form-message-success">
                <CheckCircle size={22} />

                <div>
                  <strong>
                    Bericht verzonden!
                  </strong>

                  <p>
                    Bedankt voor je bericht. We nemen zo snel
                    mogelijk contact met je op.
                  </p>
                </div>
              </div>
            )}

            {/* LIMIET BEREIKT */}
            {status === 'error' &&
              errorType === 'limit' && (
                <div className="form-message form-message-error">
                  <AlertCircle size={22} />

                  <div>
                    <strong>
                      Dit formulier werkt momenteel niet.
                    </strong>

                    <p>
                      Je bent altijd welkom om ons een e-mail
                      te sturen via{' '}
                      <a href="mailto:bxlnoordbasket@gmail.com">
                        bxlnoordbasket@gmail.com
                      </a>.
                    </p>
                  </div>
                </div>
              )}

            {/* ANDERE FOUT */}
            {status === 'error' &&
              errorType !== 'limit' && (
                <div className="form-message form-message-error">
                  <AlertCircle size={22} />

                  <div>
                    <strong>
                      Het bericht kon niet worden verzonden.
                    </strong>

                    <p>
                      Probeer het later opnieuw of stuur ons
                      rechtstreeks een e-mail via{' '}
                      <a href="mailto:bxlnoordbasket@gmail.com">
                        bxlnoordbasket@gmail.com
                      </a>.
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