// ============================================================
//  src/components/seo/SEO.jsx
//  Drop this one component on every page – no more copy-paste
//  Usage: <SEO page="home" />   OR   <SEO {...customMeta} />
// ============================================================

import { Helmet } from 'react-helmet-async';
import { SITE, PAGE_META } from '../config/seo';

/**
 * @param {string}  page       - key of PAGE_META ("home"|"about"|etc.)
 * @param {string}  [title]    - override title
 * @param {string}  [description] - override description
 * @param {string}  [canonical]   - override canonical URL
 * @param {string}  [ogType]      - override og:type
 * @param {string}  [ogImage]     - override og:image
 * @param {object}  [schema]      - extra JSON-LD object (or array)
 */
const SEO = ({
  page,
  title,
  description,
  canonical,
  ogType,
  ogImage,
  schema,
}) => {
  const meta = page ? PAGE_META[page] : {};

  const _title       = title       || meta.title       || SITE.name;
  const _desc        = description || meta.description || '';
  const _canonical   = canonical   || meta.canonical   || SITE.url;
  const _ogType      = ogType      || meta.ogType      || 'website';
  const _ogImage     = ogImage     || SITE.ogImage;
  const _keywords    = meta.keywords || '';

  /* ── Common person schema shared across all pages ── */
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name:        SITE.name,
    url:         SITE.url,
    image:       SITE.logoImage,
    jobTitle:    SITE.role,
    description: PAGE_META.home.description,
    email:       SITE.email,
    telephone:   SITE.phone,
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Ahmedabad',
      addressRegion:     'Gujarat',
      addressCountry:    'India',
    },
    sameAs: Object.values(SITE.social),
    knowsAbout: ['Laravel', 'WordPress', 'PHP', 'JavaScript', 'MySQL', 'WooCommerce', 'Docker', 'Git'],
  };

  /* ── Breadcrumb ── */
  const breadcrumb = _canonical !== SITE.url
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: meta.title || _title, item: _canonical },
        ],
      }
    : null;

  const schemas = [personSchema, breadcrumb, ...(Array.isArray(schema) ? schema : schema ? [schema] : [])].filter(Boolean);

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{_title}</title>
      <meta name="title"       content={_title} />
      <meta name="description" content={_desc} />
      {_keywords && <meta name="keywords" content={_keywords} />}
      <meta name="author"   content={SITE.name} />
      <meta name="language" content="English" />
      <meta name="robots"   content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={_canonical} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={_ogType} />
      <meta property="og:url"         content={_canonical} />
      <meta property="og:title"       content={_title} />
      <meta property="og:description" content={_desc} />
      <meta property="og:image"       content={_ogImage} />
      <meta property="og:image:alt"   content={`${SITE.name} – ${SITE.role}`} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name"   content={`${SITE.name} Portfolio`} />
      <meta property="og:locale"      content="en_US" />
      {_ogType === 'profile' && (
        <>
          <meta property="profile:first_name" content="Vansh" />
          <meta property="profile:last_name"  content="Patel" />
        </>
      )}

      {/* ── Twitter ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={_canonical} />
      <meta name="twitter:title"       content={_title} />
      <meta name="twitter:description" content={_desc} />
      <meta name="twitter:image"       content={SITE.twitterImage} />

      {/* ── Geo ── */}
      <meta name="geo.region"    content={SITE.geo.region} />
      <meta name="geo.placename" content={SITE.geo.placename} />
      <meta name="geo.position"  content={SITE.geo.position} />

      {/* ── Mobile / PWA ── */}
      <meta name="viewport"    content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="theme-color" content={SITE.themeColor} />

      {/* ── Verification ── */}
      <meta name="google-site-verification" content={SITE.googleVerify} />

      {/* ── JSON-LD ── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;