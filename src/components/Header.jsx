import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  ['Home', '/'],
  ['Praktisch', '/praktisch'],
  ['Over BNB', '/over-bnb'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner page-width">

        <NavLink
          to="/"
          className="brand"
          aria-label="Brussel Noord Basket home"
          onClick={() => setOpen(false)}
        >
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
        </NavLink>

        <nav
          className={`main-nav ${open ? 'is-open' : ''}`}
          aria-label="Hoofdnavigatie"
        >
          {navItems.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://steunactie.be/actie/steun-brussel-noord-basket/-76097"
          target="_blank"
          rel="noreferrer"
          className="header-cta hide-tablet"
        >
          Steun ons
          <span>→</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </header>
  );
}