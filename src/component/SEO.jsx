// ============================================================
//  src/component/SEO.jsx  —  v2.0  Professional SEO Component
// ============================================================

import { Helmet } from 'react-helmet-async';
import { SITE, PAGE_META } from '../config/seo';

// ── Reusable Person entity (used across all schemas) ──────────────────────
const personEntity = {
  '@type':    'Person',
  '@id':      `${SITE.url}/#person`,
  name:       'Vansh Patel',
  url:        SITE.url,
  image: {
    '@type':   'ImageObject',
    '@id':     `${SITE.url}/#personImage`,
    url:       SITE.ogImage,
    width:     800,
    height:    800,
    caption:   'Vansh Patel – Full Stack Developer from Ahmedabad',
  },
  jobTitle:    SITE.role,
  description: PAGE_META.home.description,
  email:       SITE.email,
  telephone:   SITE.phone,
  address: {
    '@type':          'PostalAddress',
    streetAddress:    'Ahmedabad',
    addressLocality:  'Ahmedabad',
    addressRegion:    'Gujarat',
    postalCode:       '380001',
    addressCountry:   'IN',
  },
  sameAs: [
    SITE.social.linkedin,
    SITE.social.github,
    SITE.social.twitter,
    SITE.url,
  ],
  knowsAbout: SITE.skills,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name:    'Silver Oak University',
    address: {
      '@type':         'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressCountry:  'IN',
    },
  },
  worksFor: {
    '@type': 'Organization',
    name:    'Purvsoft Technologies',
    address: {
      '@type':         'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressCountry:  'IN',
    },
  },
};

// ── Local Business schema (boosts Ahmedabad local search) ─────────────────
const localBusinessSchema = {
  '@type':       'LocalBusiness',
  '@id':         `${SITE.url}/#localbusiness`,
  name:          'Vansh Patel – Full Stack Developer',
  url:           SITE.url,
  telephone:     SITE.phone,
  email:         SITE.email,
  image:         SITE.ogImage,
  priceRange:    '₹₹',
  description:   'Professional Full Stack Development services in Ahmedabad – React.js, Node.js, REST APIs, and complete web applications.',
  address: {
    '@type':          'PostalAddress',
    addressLocality:  'Ahmedabad',
    addressRegion:    'Gujarat',
    postalCode:       '380001',
    addressCountry:   'IN',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   23.0225,
    longitude:  72.5714,
  },
  openingHoursSpecification: {
    '@type':     'OpeningHoursSpecification',
    dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday'],
    opens:       '09:00',
    closes:      '18:00',
  },
  sameAs: [SITE.social.linkedin, SITE.social.github],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name:    'Web Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'React.js Frontend Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Node.js & Express Backend Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Stack Web Application Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'REST API Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MySQL & MongoDB Database Design' } },
    ],
  },
};

// ── Website schema ────────────────────────────────────────────────────────
const websiteSchema = {
  '@type':       'WebSite',
  '@id':         `${SITE.url}/#website`,
  name:          `${SITE.name} – Full Stack Developer Portfolio`,
  url:           SITE.url,
  description:   PAGE_META.home.description,
  inLanguage:    'en-US',
  publisher:     { '@id': `${SITE.url}/#person` },
  potentialAction: {
    '@type':       'SearchAction',
    target: {
      '@type':       'EntryPoint',
      urlTemplate:   `${SITE.url}/portfolio?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ── Home page FAQ (rich result ke liye) ──────────────────────────────────
export const homeFaqSchema = {
  '@type': 'FAQPage',
  '@id':   `${SITE.url}/#faq`,
  mainEntity: [
    {
      '@type': 'Question',
      name:    'What services does Vansh Patel offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Vansh Patel offers Full Stack Web Development services including React.js frontend development, Node.js & Express.js backend APIs, MySQL & MongoDB database design, and complete end-to-end web applications.',
      },
    },
    {
      '@type': 'Question',
      name:    'Is Vansh Patel available for freelance projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Yes, Vansh Patel is available for freelance and full-time opportunities. Based in Ahmedabad, India, he works with clients worldwide.',
      },
    },
    {
      '@type': 'Question',
      name:    'What technologies does Vansh Patel specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Vansh Patel specialises in React.js, Node.js, Express.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, MySQL, MongoDB, REST APIs, AWS, Git, and Redux.',
      },
    },
    {
      '@type': 'Question',
      name:    'How can I contact Vansh Patel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    `You can reach Vansh Patel via email at ${SITE.email}, WhatsApp at ${SITE.phone}, or through the contact form at ${SITE.url}/contact.`,
      },
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────
//  SEO Component
// ─────────────────────────────────────────────────────────────────────────

const SEO = ({
  page,
  title,
  description,
  canonical,
  ogType,
  ogImage,
  schema,          // extra page-specific schemas (array or object)
  noIndex = false, // set true for private/thank-you pages
}) => {
  const meta = page ? PAGE_META[page] : {};

  const _title     = title       || meta.title       || SITE.name;
  const _desc      = description || meta.description || '';
  const _canonical = canonical   || meta.canonical   || SITE.url;
  const _ogType    = ogType      || meta.ogType      || 'website';
  const _ogImage   = ogImage     || SITE.ogImage;
  const _keywords  = meta.keywords || '';

  // ── WebPage entity ──────────────────────────────────────────────────────
  const webPageEntity = {
    '@type':       'WebPage',
    '@id':         `${_canonical}#webpage`,
    url:           _canonical,
    name:          _title,
    description:   _desc,
    inLanguage:    'en-US',
    isPartOf:      { '@id': `${SITE.url}/#website` },
    about:         { '@id': `${SITE.url}/#person` },
    author:        { '@id': `${SITE.url}/#person` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url:     _ogImage,
      caption: `${SITE.name} – ${SITE.role}`,
    },
    breadcrumb: _canonical !== SITE.url ? {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE.url },
        { '@type': 'ListItem', position: 2, name: meta.title || _title, item: _canonical },
      ],
    } : undefined,
  };

  // Remove undefined keys
  if (!webPageEntity.breadcrumb) delete webPageEntity.breadcrumb;

  // ── @graph — Google's preferred format ──────────────────────────────────
  const extraSchemas = Array.isArray(schema) ? schema : schema ? [schema] : [];

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      personEntity,
      localBusinessSchema,
      websiteSchema,
      webPageEntity,
      ...extraSchemas,
    ],
  };

  return (
    <Helmet>
      {/* ── Primary ──────────────────────────────────────────────────── */}
      <title>{_title}</title>
      <meta name="title"       content={_title} />
      <meta name="description" content={_desc} />
      {_keywords && <meta name="keywords" content={_keywords} />}
      <meta name="author"      content={SITE.name} />
      <meta name="language"    content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content={
        noIndex
          ? 'noindex, nofollow'
          : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      } />

      {/* ── Canonical ────────────────────────────────────────────────── */}
      <link rel="canonical" href={_canonical} />

      {/* ── Open Graph ───────────────────────────────────────────────── */}
      <meta property="og:type"              content={_ogType} />
      <meta property="og:url"              content={_canonical} />
      <meta property="og:title"            content={_title} />
      <meta property="og:description"      content={_desc} />
      <meta property="og:image"            content={_ogImage} />
      <meta property="og:image:secure_url" content={_ogImage} />
      <meta property="og:image:alt"        content={`${SITE.name} – Full Stack Developer Ahmedabad`} />
      <meta property="og:image:width"      content="800" />
      <meta property="og:image:height"     content="800" />
      <meta property="og:image:type"       content="image/png" />
      <meta property="og:site_name"        content={`${SITE.name} – Full Stack Developer`} />
      <meta property="og:locale"           content="en_US" />

      {_ogType === 'profile' && (
        <>
          <meta property="profile:first_name" content="Vansh" />
          <meta property="profile:last_name"  content="Patel" />
          <meta property="profile:username"   content="patelvansh13" />
        </>
      )}

      {/* ── Twitter Card ─────────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@patelvansh13" />
      <meta name="twitter:creator"     content="@patelvansh13" />
      <meta name="twitter:url"         content={_canonical} />
      <meta name="twitter:title"       content={_title} />
      <meta name="twitter:description" content={_desc} />
      <meta name="twitter:image"       content={SITE.twitterImage} />
      <meta name="twitter:image:alt"   content={`${SITE.name} – Full Stack Developer`} />

      {/* ── Geo / Local SEO ──────────────────────────────────────────── */}
      <meta name="geo.region"    content={SITE.geo.region} />
      <meta name="geo.placename" content={SITE.geo.placename} />
      <meta name="geo.position"  content={SITE.geo.position} />
      <meta name="ICBM"          content={SITE.geo.icbm} />

      {/* ── Mobile / PWA ─────────────────────────────────────────────── */}
      <meta name="viewport"                content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color"             content={SITE.themeColor} />
      <meta name="msapplication-TileColor" content={SITE.themeColor} />
      <meta name="mobile-web-app-capable"                content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title"            content={SITE.name} />

      {/* ── Verification ─────────────────────────────────────────────── */}
      <meta name="google-site-verification" content={SITE.googleVerify} />

      {/* ── JSON-LD @graph ────────────────────────────────────────────── */}
      <script type="application/ld+json">
        {JSON.stringify(graph)}
      </script>
    </Helmet>
  );
};

export default SEO;