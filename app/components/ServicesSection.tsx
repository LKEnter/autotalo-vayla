import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  sectionEyebrowClass,
  sectionH2Class,
  sectionLedeClass,
} from "../lib/sectionTypography";

type Service = {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "Vaihtoautot",
    category: "Myynti",
    description: "Yli 25 tarkastettua autoa monimuotoisiin käyttötarkoituksiin — selkeät hinnat ja nopea osto.",
    imageSrc: "/assets/images/service-1.png",
    imageAlt: "Vaihtoautoja myyntialueella",
    href: "#uusimmat",
  },
  {
    title: "Rahoitus",
    category: "Rahoitus",
    description: "Joustavat maksuvaihtoehdot ja kuukausierälaskuri — pyydä tarjous ilman sitoumuksia.",
    imageSrc: "/assets/images/service-2.png",
    imageAlt: "Auto maisemassa",
    href: "#rahoitus",
  },
  {
    title: "Ostamme autosi",
    category: "Vaihtohyvitys",
    description: "Saat reilun tarjouksen nykyisestä autostasi ja voimme yhdistää vaihdon uuden auton ostoon.",
    imageSrc: "/assets/images/service-3.png",
    imageAlt: "Asiakas ja myyjä keskustelevat auton vaihdosta",
    href: "#vaihto",
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group relative flex min-h-[440px] flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-foreground)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2 sm:min-h-[480px]"
    >
      <Image
        src={service.imageSrc}
        alt={service.imageAlt}
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 1023px) 100vw, 33vw"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/55"
        aria-hidden
      />

      <span className="absolute left-5 top-5 z-10 rounded-full border border-white/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-[2px]">
        {service.category}
      </span>

      <h3 className="absolute bottom-[38%] left-5 right-5 z-10 m-0 font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-[1.75rem] lg:text-3xl">
        {service.title}
      </h3>

      <div className="relative z-10 mt-auto">
        <svg
          viewBox="0 0 400 48"
          preserveAspectRatio="none"
          className="block h-10 w-full text-[var(--color-secondary)]"
          aria-hidden
        >
          <path
            d="M0,48 C120,8 220,52 400,20 L400,48 L0,48 Z"
            fill="currentColor"
          />
        </svg>

        <div className="flex items-end justify-between gap-4 bg-[var(--color-secondary)] px-5 pb-10 pt-6 sm:px-6">
          <p className="m-0 max-w-[85%] text-sm leading-relaxed text-[var(--color-muted)]">
            {service.description}
          </p>
          <span
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-foreground)] transition-[transform,background-color,border-color] duration-200 group-hover:translate-x-0.5 group-hover:border-[var(--color-foreground)]/20 group-hover:bg-[var(--color-accent)]"
            aria-hidden
          >
            <ArrowRight className="size-4" strokeWidth={2.25} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesSection() {
  return (
    <section id="palvelut" className="w-full bg-white py-14 md:py-20" aria-label="Palvelut">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header className="max-w-2xl">
            <p className={sectionEyebrowClass}>Palvelut</p>
            <h2 className={sectionH2Class}>Kaikki yhdestä paikasta</h2>
            <p className={sectionLedeClass}>
              Vaihtoautot, rahoitus ja vaihtoapu — selkeät palvelut koko autokauppaan.
            </p>
          </header>

          <Link
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--color-foreground)] no-underline transition-colors hover:text-[var(--color-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2"
          >
            Katso kaikki palvelut
            <ArrowRight className="size-4 text-[var(--color-accent)]" strokeWidth={2.25} aria-hidden />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
