import {
  useEffect,
} from 'react';

import {
  useLocation,
} from 'react-router-dom';

import {
  useTranslation,
} from 'react-i18next';

const SITE_URL =
  'https://brusselnoordbasket.be';

const seoPages = {
  '/': {
    titleKey:
      'seo.homeTitle',

    descriptionKey:
      'seo.homeDescription',
  },

  '/praktisch': {
    titleKey:
      'seo.practicalTitle',

    descriptionKey:
      'seo.practicalDescription',
  },

  '/over-bnb': {
    titleKey:
      'seo.aboutTitle',

    descriptionKey:
      'seo.aboutDescription',
  },

  '/contact': {
    titleKey:
      'seo.contactTitle',

    descriptionKey:
      'seo.contactDescription',
  },

  '/privacy': {
    titleKey:
      'seo.privacyTitle',

    descriptionKey:
      'seo.privacyDescription',
  },

  '/steun-stad-brussel': {
    titleKey:
      'seo.supportTitle',

    descriptionKey:
      'seo.supportDescription',
  },
};

function setMeta(
  property,
  content,
  attribute = 'name'
) {
  let element =
    document.head.querySelector(
      `meta[${attribute}="${property}"]`
    );

  if (
    !element
  ) {
    element =
      document.createElement(
        'meta'
      );

    element.setAttribute(
      attribute,
      property
    );

    document.head.appendChild(
      element
    );
  }

  element.setAttribute(
    'content',
    content
  );
}

export default function Seo() {
  const location =
    useLocation();

  const {
    t,
    i18n,
  } = useTranslation();

  useEffect(
    () => {
      const normalizedPath =
        location.pathname ===
        '/'
          ? '/'
          : location.pathname.replace(
              /\/+$/,
              ''
            );

      const page =
        seoPages[
          normalizedPath
        ];

      const isKnownPage =
        Boolean(
          page
        );

      const title =
        page
          ? t(
              page.titleKey
            )
          : t(
              'seo.notFoundTitle'
            );

      const description =
        page
          ? t(
              page.descriptionKey
            )
          : t(
              'seo.notFoundDescription'
            );

      const canonicalPath =
        normalizedPath ===
        '/'
          ? '/'
          : `${normalizedPath}/`;

      const canonicalUrl =
        `${SITE_URL}${canonicalPath}`;

      const language =
        (
          i18n.resolvedLanguage ||
          i18n.language ||
          'nl'
        )
          .split(
            '-'
          )[0]
          .toLowerCase();

      const localeMap = {
        nl:
          'nl_BE',

        fr:
          'fr_BE',

        en:
          'en_GB',
      };

      document.title =
        title;

      setMeta(
        'description',
        description
      );

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
        'og:locale',
        localeMap[
          language
        ] ||
          'nl_BE',
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

      if (
        !canonical
      ) {
        canonical =
          document.createElement(
            'link'
          );

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

      if (
        !robots
      ) {
        robots =
          document.createElement(
            'meta'
          );

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
    },
    [
      location.pathname,
      i18n.resolvedLanguage,
      i18n.language,
      t,
    ]
  );

  return null;
}