import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://brusselnoordbasket.be';

const seoPages = {
  '/': {
    title: 'Brussel Noord Basket | Basketbal in Brussel',
    description:
      'Brussel Noord Basket is een Brusselse basketbalclub voor en door jongeren. Bekijk wedstrijden, trainingsuren, praktische info en het verhaal van BNB.',
  },

  '/praktisch': {
    title: 'Praktische info | Brussel Noord Basket',
    description:
      'Bekijk de komende wedstrijden, trainingsuren en trainingslocaties van Brussel Noord Basket.',
  },

  '/over-bnb': {
    title: 'Over BNB | Brussel Noord Basket',
    description:
      'Ontdek het verhaal van Brussel Noord Basket, een Brusselse basketbalclub ontstaan voor en door jongeren.',
  },

  '/contact': {
    title: 'Contact | Brussel Noord Basket',
    description:
      'Neem contact op met Brussel Noord Basket voor vragen over trainingen, wedstrijden, lidmaatschap of de club.',
  },

  '/privacy': {
    title: 'Privacyverklaring | Brussel Noord Basket',
    description:
      'Lees hoe Brussel Noord Basket vzw persoonsgegevens verwerkt en beschermt.',
  },

  '/steun-stad-brussel': {
    title: 'Met de steun van Stad Brussel | Brussel Noord Basket',
    description:
      'Brussel Noord Basket met de steun van Faouzia Hariche, schepen van Jeugd van de Stad Brussel.',
  },
};

function setMeta(property, content, attribute = 'name') {
  let element = document.head.querySelector(
    `meta[${attribute}="${property}"]`
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, property);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath =
      location.pathname === '/'
        ? '/'
        : location.pathname.replace(/\/+$/, '');

    const page = seoPages[normalizedPath];

    const isKnownPage = Boolean(page);

    const title =
      page?.title ||
      'Pagina niet gevonden | Brussel Noord Basket';

    const description =
      page?.description ||
      'De gevraagde pagina kon niet worden gevonden.';

    const canonicalPath =
      normalizedPath === '/'
        ? '/'
        : `${normalizedPath}/`;

    const canonicalUrl =
      `${SITE_URL}${canonicalPath}`;

    document.title = title;

    setMeta('description', description);

    setMeta(
      'og:title',
      title,
      'property'
    );

    setMeta(
      'og:description',
      description,
      'property'
    );

    setMeta(
      'og:url',
      canonicalUrl,
      'property'
    );

    setMeta(
      'twitter:title',
      title
    );

    setMeta(
      'twitter:description',
      description
    );

    let canonical =
      document.head.querySelector(
        'link[rel="canonical"]'
      );

    if (!canonical) {
      canonical =
        document.createElement('link');

      canonical.setAttribute(
        'rel',
        'canonical'
      );

      document.head.appendChild(
        canonical
      );
    }

    canonical.setAttribute(
      'href',
      canonicalUrl
    );

    let robots =
      document.head.querySelector(
        'meta[name="robots"]'
      );

    if (!robots) {
      robots =
        document.createElement('meta');

      robots.setAttribute(
        'name',
        'robots'
      );

      document.head.appendChild(
        robots
      );
    }

    robots.setAttribute(
      'content',
      isKnownPage
        ? 'index, follow'
        : 'noindex, nofollow'
    );
  }, [location.pathname]);

  return null;
}