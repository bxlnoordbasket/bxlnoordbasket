import {
  Mail,
} from 'lucide-react';

import {
  NavLink,
} from 'react-router-dom';

import {
  useTranslation,
} from 'react-i18next';

function InstagramIcon({
  size = 16,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="5"
        ry="5"
      />

      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />

      <line
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}

function FacebookIcon({
  size = 16,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const {
    t,
  } = useTranslation();

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
            {t(
              'footer.description'
            )}
          </p>
        </div>

        <div className="footer-links">
          <h3>
            {t(
              'footer.pages'
            )}
          </h3>

          <NavLink to="/">
            {t(
              'nav.home'
            )}
          </NavLink>

          <NavLink to="/praktisch">
            {t(
              'nav.practical'
            )}
          </NavLink>

          <NavLink to="/over-bnb">
            {t(
              'nav.about'
            )}
          </NavLink>

        

          <NavLink to="/contact">
            {t(
              'nav.contact'
            )}
          </NavLink>

          <NavLink to="/privacy">
            {t(
              'footer.privacy'
            )}
          </NavLink>
        </div>

        <div className="footer-links">
          <h3>
            {t(
              'footer.contact'
            )}
          </h3>

          <a href="mailto:bxlnoordbasket@gmail.com">
            <Mail
              size={16}
            />

            bxlnoordbasket@gmail.com
          </a>

          <a
            href="https://www.instagram.com/brusselnoordbasket/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon
              size={16}
            />

            Instagram
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61590572720599"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon
              size={16}
            />

            Facebook
          </a>
        </div>

        <div className="footer-cta-card">
          <h3>
            {t(
              'footer.helpTitle'
            )}
          </h3>

          <a
            className="button button-green"
            href="https://steunactie.be/actie/steun-brussel-noord-basket/-76097"
            target="_blank"
            rel="noreferrer"
          >
            {t(
              'footer.support'
            )}

            <span>
              →
            </span>
          </a>
        </div>
      </div>

      <div className="footer-bottom page-width">
        <div className="footer-bottom-main">
          <span>
            ©{' '}
            {new Date().getFullYear()}{' '}
            Brussel Noord Basket vzw
          </span>

          <span>
            {t(
              'footer.companyNumber'
            )}
          </span>

          <span>
            Antwerpselaan 40, 1000 Brussel
          </span>
        </div>

        <NavLink
          className="footer-privacy-link"
          to="/privacy"
        >
          {t(
            'footer.privacyStatement'
          )}
        </NavLink>
      </div>
    </footer>
  );
}