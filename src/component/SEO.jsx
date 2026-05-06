// ============================================================
//  src/component/SEO.jsx
// ============================================================

import { Helmet } from 'react-helmet-async';
import { SITE, PAGE_META } from '../config/seo';

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

  // ── Person schema (har page pe) ──
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name:        'Vansh Patel',
    url:         SITE.url,
    image: {
      '@type':      'ImageObject',
      url:          SITE.ogImage,                      // ✅ Google image index ke liye
      width:        '800',
      height:       '800',
      caption:      'Vansh Patel – Full Stack Developer from Ahmedabad',
    },
    jobTitle:    SITE.role,
    description: PAGE_META.home.description,
    email:       SITE.email,
    telephone:   SITE.phone,
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Ahmedabad',
      addressRegion:     'Gujarat',
      addressCountry:    'IN',
    },
    sameAs: [
      SITE.social.linkedin,
      SITE.social.github,
    ],
    knowsAbout: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3',
                 'MySQL', 'MongoDB', 'AWS', 'Git', 'REST APIs'],
  };

  // ── WebPage schema ──
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type':    'WebPage',
    name:       _title,
    url:        _canonical,
    description: _desc,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name:    `${SITE.name} Portfolio`,
      url:     SITE.url,
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url:     _ogImage,
      caption: `${SITE.name} – ${SITE.role}`,
    },
    author: {
      '@type': 'Person',
      name:    SITE.name,
      url:     SITE.url,
    },
  };

  // ── Breadcrumb ──
  const breadcrumb = _canonical !== SITE.url
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home',           item: SITE.url },
          { '@type': 'ListItem', position: 2, name: meta.title || _title, item: _canonical },
        ],
      }
    : null;

  const schemas = [
    personSchema,
    webPageSchema,
    breadcrumb,
    ...(Array.isArray(schema) ? schema : schema ? [schema] : []),
  ].filter(Boolean);

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
      <meta property="og:image:secure_url" content={_ogImage} />
      <meta property="og:image:alt"   content={`Vansh Patel – Full Stack Developer Ahmedabad`} />
      <meta property="og:image:width"  content="800" />
      <meta property="og:image:height" content="800" />
      <meta property="og:image:type"   content="image/png" />
      <meta property="og:site_name"   content={`${SITE.name} – Full Stack Developer`} />
      <meta property="og:locale"      content="en_US" />
      {_ogType === 'profile' && (
        <>
          <meta property="profile:first_name" content="Vansh" />
          <meta property="profile:last_name"  content="Patel" />
          <meta property="profile:username"   content="patelvansh13" />
        </>
      )}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:url"         content={_canonical} />
      <meta name="twitter:title"       content={_title} />
      <meta name="twitter:description" content={_desc} />
      <meta name="twitter:image"       content={SITE.twitterImage} />
      <meta name="twitter:image:alt"   content={`Vansh Patel – Full Stack Developer`} />

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