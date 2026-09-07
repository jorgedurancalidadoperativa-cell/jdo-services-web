import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J D O SERVICES | Mantenimiento Residencial',
  description:
    'J D O SERVICES ofrece mantenimiento residencial y servicios profesionales para propiedades, fraccionamientos, condominios y empresas.',
  metadataBase: new URL('https://jdo-services-web.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: 'J D O SERVICES | Mantenimiento Residencial',
    description:
      'Mantenimiento residencial y servicios profesionales para propiedades, fraccionamientos, condominios y empresas.',
    url: 'https://jdo-services-web.vercel.app/',
    siteName: 'J D O SERVICES',
    type: 'website',
    locale: 'es_MX',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://jdo-services-web.vercel.app/#business',
  name: 'J D O SERVICES',
  url: 'https://jdo-services-web.vercel.app/',
  logo: 'https://jdo-services-web.vercel.app/icon.png',
  image: 'https://jdo-services-web.vercel.app/icon.png',
  telephone: '+52 656 867 2099',
  email: 'jdoservicesresidencial@gmail.com',
  description:
    'J D O SERVICES ofrece mantenimiento residencial y servicios profesionales para propiedades, fraccionamientos, condominios y empresas.',
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
    'https://www.instagram.com/jdo.services',
    'https://www.facebook.com/jdoservices1',
  ],
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
