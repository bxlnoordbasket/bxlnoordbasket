import { Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function InstagramIcon({ size = 16 }) {
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

function FacebookIcon({ size = 16 }) {
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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-top">
        <div className="footer-brand-wrap">
          <div className="brand footer-brand">
            <img
              src="/assets/bnb-logo-green.png"
              alt="Brussel Noord Basket logo"
            />

            <span className="brand-name">
              BRUSSEL
              <br />
              NOORD
              <br />
              BASKET
            </span>
          </div>

          <p>
            Meer dan basketbal. Een club waar spelers, coaches,
            ouders en supporters samen groeien.
          </p>
        </div>

        <div className="footer-links">
          <h3>Pagina&apos;s</h3>

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/praktisch">
            Praktisch
          </NavLink>

          <NavLink to="/over-bnb">
            Over BNB
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/privacy">
            Privacy
          </NavLink>
        </div>

        <div className="footer-links">
          <h3>Contact</h3>

          <a href="mailto:bxlnoordbasket@gmail.com">
            <Mail size={16} />
            bxlnoordbasket@gmail.com
          </a>

          <a
            href="https://www.instagram.com/brusselnoordbasket/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61590572720599&sk=followers"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon size={16} />
            Facebook
          </a>
        </div>

        <div className="footer-cta-card">
          <h3>Help onze club groeien.</h3>

          <a
            className="button button-green"
            href="https://steunactie.be/actie/steun-brussel-noord-basket/-76097"
            target="_blank"
            rel="noreferrer"
          >
            Steun ons
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom page-width">
        <div className="footer-bottom-main">
  <span>
    © {new Date().getFullYear()} Brussel Noord Basket vzw
  </span>

  <span>
    Ondernemingsnummer 1039.061.822
  </span>

  <span>
    Antwerpselaan 40, 1000 Brussel
  </span>
</div>

        <NavLink className="footer-privacy-link" to="/privacy">
          Privacyverklaring
        </NavLink>
      </div>
    </footer>
  );
}
