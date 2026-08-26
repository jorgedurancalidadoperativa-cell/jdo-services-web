import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'J D O SERVICES | Mantenimiento profesional',
  description: 'Mantenimiento residencial y servicios profesionales para propiedades, fraccionamientos, condominios, empresas y constructoras.',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="es"><body>{children}</body></html>; }
