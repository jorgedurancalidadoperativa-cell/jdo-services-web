import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J D O SERVICES | Mantenimiento Residencial y Comercial',
  description:
    'J D O SERVICES ofrece mantenimiento residencial y comercial, albercas, electricidad, plomería, pintura, impermeabilización, jardinería y servicios para empresas.',
  metadataBase: new URL('https://jdo-services-web.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'J D O SERVICES | Mantenimiento Residencial y Comercial',
    description:
      'Mantenimiento profesional para propiedades, residenciales, condominios, empresas y constructoras.',
    url: 'https://jdo-services-web.vercel.app/',
    siteName: 'J D O SERVICES',
    type: 'website',
    locale: 'es_MX',
    images: [
      {
        url: '/logo-jdo-services.png',
        alt: 'J D O SERVICES',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://jdo-services-web.vercel.app/#business',
  name: 'J D O SERVICES',
  url: 'https://jdo-services-web.vercel.app/',
  logo: 'https://jdo-services-web.vercel.app/logo-jdo-services.png',
  image: 'https://jdo-services-web.vercel.app/logo-jdo-services.png',
  telephone: '+52 656 867 2099',
  email: 'jdoservicesresidencial@gmail.com',
  description:
    'J D O SERVICES ofrece mantenimiento residencial y comercial, albercas, electricidad, plomería, pintura, impermeabilización, jardinería y servicios para empresas.',
  areaServed: [
    {
      '@type': 'City',
      name: 'Veracruz',
    },
    {
      '@type': 'State',
      name: 'Veracruz',
    },
    {
      '@type': 'Country',
      name: 'México',
    },
  ],
  sameAs: [
    'https://www.facebook.com/jdoservices1',
    'https://www.instagram.com/jdo.services',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de J D O SERVICES',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mantenimiento general',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mantenimiento de albercas',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electricidad',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Plomería',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pintura',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Impermeabilización',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Jardinería',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Servicios para empresas',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
