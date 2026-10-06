import {
  useState,
} from 'react';

import {
  Menu,
  X,
} from 'lucide-react';

import {
  NavLink,
} from 'react-router-dom';

import {
  useTranslation,
} from 'react-i18next';

import '../language-switcher.css';

const navItems = [
  {
    key:
      'nav.home',

    path:
      '/',
  },

  {
    key:
      'nav.practical',

    path:
      '/praktisch',
  },

  {
    key:
      'nav.about',

    path:
      '/over-bnb',
  },


  {
    key:
      'nav.contact',

    path:
      '/contact',
  },
];

const languages = [
  {
    code:
      'nl',

    label:
      'NL',
  },

  {
    code:
      'fr',

    label:
      'FR',
  },

  {
    code:
      'en',

    label:
      'EN',
  },
];

const supportUrl =
  'https://steunactie.be/actie/steun-brussel-noord-basket/-76097';

export default function Header() {
  const [
    open,
    setOpen,
  ] =
    useState(
      false
    );

  const {
    t,
    i18n,
  } =
    useTranslation();

  const detectedLanguage =
    i18n.resolvedLanguage ||
    i18n.language ||
    'nl';

  const shortLanguage =
    detectedLanguage
      .split(
        '-'
      )[0]
      .toLowerCase();

  const activeLanguage =
    languages.some(
      (
        language
      ) =>
        language.code ===
        shortLanguage
    )
      ? shortLanguage
      : 'nl';

  const changeLanguage =
    async (
      language
    ) => {
      await i18n.changeLanguage(
        language
      );

      setOpen(
        false
      );
    };

  const LanguageSwitcher =
    ({
      mobile = false,
    }) => (
      <div
        className={`language-switcher ${
          mobile
            ? 'language-switcher-mobile'
            : 'language-switcher-desktop'
        }`}
        aria-label={t(
          'language.label'
        )}
      >
        {languages.map(
          (
            language
          ) => (
            <button
              key={
                language.code
              }
              type="button"
              className={`language-button ${
                activeLanguage ===
                language.code
                  ? 'active'
                  : ''
              }`}
              aria-pressed={
                activeLanguage ===
                language.code
              }
              onClick={() =>
                changeLanguage(
                  language.code
                )
              }
            >
              {
                language.label
              }
            </button>
          )
        )}
      </div>
    );

  return (
    <header className="site-header">
      <div className="header-inner page-width">
        <div className="header-brand-zone">
          <NavLink
            to="/"
            className="brand"
            aria-label={t(
              'nav.homeAria'
            )}
            onClick={() =>
              setOpen(
                false
              )
            }
          >
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
          </NavLink>
        </div>

        <nav
          className={`main-nav ${
            open
              ? 'is-open'
              : ''
          }`}
          aria-label={t(
            'nav.mainNavigation'
          )}
        >
          <div className="nav-grid">
            {navItems.map(
              ({
                key,
                path,
              }) => (
                <NavLink
                  key={
                    path
                  }
                  to={
                    path
                  }
                  end={
                    path ===
                    '/'
                  }
                  className={({
                    isActive,
                  }) =>
                    `nav-link ${
                      isActive
                        ? 'active'
                        : ''
                    }`
                  }
                  onClick={() =>
                    setOpen(
                      false
                    )
                  }
                >
                  {t(
                    key
                  )}
                </NavLink>
              )
            )}
          </div>

          <LanguageSwitcher
            mobile
          />
        </nav>

        <div className="header-actions-zone">
          <LanguageSwitcher />

          <a
            href={
              supportUrl
            }
            target="_blank"
            rel="noreferrer"
            className="header-cta hide-tablet"
          >
            <span className="header-cta-label">
              {t(
                'nav.support'
              )}
            </span>

            <span className="header-cta-arrow">
              →
            </span>
          </a>

          <a
            href={
              supportUrl
            }
            target="_blank"
            rel="noreferrer"
            className="mobile-header-cta"
          >
            {t(
              'nav.support'
            )}

            <span>
              →
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={
              open
                ? t(
                    'nav.closeMenu'
                  )
                : t(
                    'nav.openMenu'
                  )
            }
            aria-expanded={
              open
            }
            onClick={() =>
              setOpen(
                (
                  value
                ) =>
                  !value
              )
            }
          >
            {open ? (
              <X
                size={24}
              />
            ) : (
              <Menu
                size={24}
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}