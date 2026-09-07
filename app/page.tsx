'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
  ShieldCheck,
  Leaf,
  Building2,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';

const WA = '5216568672099';

const wa = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M14.2 21v-7h2.35l.35-2.73H14.2V9.53c0-.79.22-1.33 1.36-1.33h1.46V5.76c-.25-.03-1.1-.1-2.09-.1-2.07 0-3.49 1.26-3.49 3.58v2.03H9.1V14h2.34v7h2.76Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle
      cx="12"
      cy="12"
      r="3.6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
  </svg>
);

const services = [
  [
    'Mantenimiento general',
    'Preventivo y correctivo para conservar tu propiedad en óptimas condiciones.',
    Wrench,
  ],
  [
    'Albercas',
    'Limpieza, mantenimiento y cuidado integral del sistema de tu alberca.',
    Droplets,
  ],
  [
    'Electricidad',
    'Diagnóstico, instalaciones, reparaciones y mantenimiento eléctrico.',
    Zap,
  ],
  [
    'Plomería',
    'Atención a fugas, instalaciones, reparaciones y mantenimiento hidráulico.',
    Wrench,
  ],
  [
    'Pintura',
    'Acabados, renovación de espacios y mantenimiento de superficies.',
    Paintbrush,
  ],
  [
    'Impermeabilización',
    'Protección de techos y superficies contra humedad y filtraciones.',
    ShieldCheck,
  ],
  [
    'Jardinería',
    'Conservación y mantenimiento de áreas verdes y exteriores.',
    Leaf,
  ],
  [
    'Servicios para empresas',
    'Soluciones de mantenimiento para condominios, residenciales y empresas.',
    Building2,
  ],
] as const;

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <header className="nav">
        <div className="navin">
          <a href="#inicio" className="brand">
            <Image
              src="/logo-jdo-services.png"
              alt="J D O SERVICES"
              width={420}
              height={124}
              priority
            />
          </a>

          <button
            className="menub"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? 'open' : ''}>
            <a href="#servicios" onClick={() => setOpen(false)}>
              Servicios
            </a>
            <a href="#plataforma" onClick={() => setOpen(false)}>
              Plataforma
            </a>
            <a href="#nosotros" onClick={() => setOpen(false)}>
              Nosotros
            </a>
            <a href="#proceso" onClick={() => setOpen(false)}>
              Proceso
            </a>
            <a href="#contacto" onClick={() => setOpen(false)}>
              Contacto
            </a>
            <a
              className="navcta"
              href={wa(
                'Hola, quiero solicitar una cotización con J D O SERVICES.'
              )}
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="glow one" />
        <div className="glow two" />

        <div className="heroIn">
          <div className="eyebrow">MANTENIMIENTO PROFESIONAL</div>

          <h1>
            Tu propiedad.
            <br />
            <em>Nuestro compromiso.</em>
          </h1>

          <p>
            Soluciones de mantenimiento residencial y comercial con atención
            profesional, respuesta rápida y seguimiento.
          </p>

          <div className="actions">
            <a
              className="primary"
              href={wa(
                'Hola, quiero solicitar una cotización con J D O SERVICES.'
              )}
            >
              Solicitar cotización <ArrowRight />
            </a>

            <a className="secondary" href="#servicios">
              Ver servicios
            </a>
          </div>

          <div className="trust">
            <span>
              <CheckCircle2 /> Atención profesional
            </span>
            <span>
              <CheckCircle2 /> Trabajo de calidad
            </span>
            <span>
              <CheckCircle2 /> Seguimiento
            </span>
          </div>
        </div>

        <div className="heroCard">
          <div className="cardTop">
            <span>J D O</span>
            <span>01</span>
          </div>

          <div className="cardLine" />

          <p>
            MAINTENANCE
            <br />
            <strong>SERVICES</strong>
          </p>

          <div className="cardBottom">RESIDENCIAL · COMERCIAL</div>
        </div>
      </section>

      <section id="servicios" className="section">
        <div className="sectionHead">
          <div>
            <span className="kicker">LO QUE HACEMOS</span>

            <h2>
              Servicios que mantienen
              <br />
              <em>tu propiedad en forma.</em>
            </h2>
          </div>

          <p>
            Un solo proveedor para las necesidades de mantenimiento que tu
            propiedad requiere.
          </p>
        </div>

        <div className="grid">
          {services.map(([title, desc, Icon]) => (
            <article className="service" key={title}>
              <div className="icon">
                <Icon />
              </div>

              <h3>{title}</h3>

              <p>{desc}</p>

              <a href={wa(`Hola, me interesa el servicio de ${title}.`)}>
                Solicitar servicio <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="nosotros" className="dark">
        <div className="darkIn">
          <div>
            <span className="kicker">J D O SERVICES</span>

            <h2>
              Mantenimiento con
              <br />
              <em>visión profesional.</em>
            </h2>
          </div>

          <div className="statement">
            <p>
              Nos enfocamos en resolver, prevenir y mantener. Trabajamos para
              que propietarios, administradores, empresas y constructoras
              tengan un aliado confiable para sus necesidades de mantenimiento.
            </p>

            <div className="stats">
              <div>
                <b>01</b>
                <span>Atención directa</span>
              </div>

              <div>
                <b>02</b>
                <span>Respuesta rápida</span>
              </div>

              <div>
                <b>03</b>
                <span>Seguimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plataforma" className="platform">
        <div className="platformIn">
          <div className="platformTop">
            <div>
              <span className="kicker">J D O SERVICES APP</span>

              <h2>
                Tu residencial.
                <br />
                <em>Bajo control.</em>
              </h2>
            </div>

            <div className="platformLead">
              <p>
                Una plataforma para conectar residentes, administración y
                personal operativo desde un solo lugar.
              </p>

              <a
                className="primary"
                href={wa(
                  'Hola, quiero conocer JDO SERVICES APP y solicitar una demostración.'
                )}
              >
                <MessageCircle /> Solicitar demostración
              </a>
            </div>
          </div>

          <div className="platformGrid">
            <article>
              <div className="platformIcon">
                <ShieldCheck />
              </div>
              <span>01</span>
              <h3>Control de accesos</h3>
              <p>
                Genera códigos QR para tus visitas y agiliza el acceso de forma
                controlada.
              </p>
            </article>

            <article>
              <div className="platformIcon">
                <Building2 />
              </div>
              <span>02</span>
              <h3>Información en tiempo real</h3>
              <p>
                Consulta avisos y el estatus operativo de áreas comunes desde
                la plataforma.
              </p>
            </article>

            <article>
              <div className="platformIcon">
                <MessageCircle />
              </div>
              <span>03</span>
              <h3>Reportes y seguimiento</h3>
              <p>
                Reporta incidencias con evidencia y consulta su avance hasta la
                solución.
              </p>
            </article>

            <article>
              <div className="platformIcon">
                <CheckCircle2 />
              </div>
              <span>04</span>
              <h3>Todo en un solo lugar</h3>
              <p>
                Una experiencia centralizada para residentes, administración y
                operación.
              </p>
            </article>
          </div>

          <div className="platformQuote">
            TODO EL PODER DE TU CLUSTER{' '}
            <em>EN LA PALMA DE TU MANO.</em>
          </div>
        </div>
      </section>

      <section id="proceso" className="section process">
        <div className="sectionHead">
          <div>
            <span className="kicker">ASÍ TRABAJAMOS</span>

            <h2>
              Simple. Claro.
              <br />
              <em>Profesional.</em>
            </h2>
          </div>
        </div>

        <div className="steps">
          {[
            ['01', 'Solicitas', 'Cuéntanos qué necesitas.'],
            ['02', 'Evaluamos', 'Revisamos el servicio y sus requerimientos.'],
            ['03', 'Cotizamos', 'Te presentamos una propuesta clara.'],
            ['04', 'Ejecutamos', 'Realizamos el trabajo con seguimiento.'],
          ].map(([n, t, d]) => (
            <div className="step" key={n}>
              <b>{n}</b>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contacto">
        <div>
          <span className="kicker">¿NECESITAS MANTENIMIENTO?</span>

          <h2>
            Hablemos de tu
            <br />
            <em>próximo servicio.</em>
          </h2>

          <p>
            Solicita información o una cotización directamente por WhatsApp.
          </p>
        </div>

        <a
          href={wa(
            'Hola, quiero información sobre los servicios de J D O SERVICES.'
          )}
          className="primary light"
        >
          <MessageCircle /> WhatsApp 656 867 2099
        </a>
      </section>

      <footer>
        <div className="footerIn">
          <div className="brand">
            <Image
              src="/logo-jdo-services.png"
              alt="J D O SERVICES"
              width={360}
              height={106}
            />
          </div>

          <div className="footerContact">
            <span>656 867 2099</span>
            <span>jdoservicesresidencial@gmail.com</span>

            <div className="socialLinks">
              <a
                href="https://www.facebook.com/jdoservices1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook J D O SERVICES"
                title="Facebook"
              >
                <FacebookIcon />
              </a>

              <a
                href="https://www.instagram.com/jdo.services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram J D O SERVICES"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <small>
            © 2026 J D O SERVICES. Todos los derechos reservados.
          </small>
        </div>
      </footer>

      <a
        className="float"
        href={wa('Hola, J D O SERVICES. Quiero solicitar información.')}
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </a>
    </main>
  );
}
