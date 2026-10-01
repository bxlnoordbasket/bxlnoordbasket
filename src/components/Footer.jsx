import { Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function InstagramIcon({ size = 16 }) {
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

function FacebookIcon({ size = 16 }) {
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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-top">

        {/* BRAND */}
        <div className="footer-brand-wrap">
          <div className="brand footer-brand">
            <img
              src={`${import.meta.env.BASE_URL}assets/bnb-logo-green.png`}
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
            Meer dan basketbal. Een club waar spelers,
            coaches, ouders en supporters samen groeien.
          </p>
        </div>

        {/* PAGINA'S */}
        <div className="footer-links">
          <h3>
            Pagina&apos;s
          </h3>

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
        </div>

        {/* CONTACT */}
        <div className="footer-links">
          <h3>
            Contact
          </h3>

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

        {/* STEUN ONS */}
        <div className="footer-cta-card">
          <h3>
            Help onze club groeien.
          </h3>

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
        <span>
          © {new Date().getFullYear()} Brussel Noord Basket
        </span>
      </div>
    </footer>
  );
}