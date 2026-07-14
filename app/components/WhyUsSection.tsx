import Image from "next/image";
import { CreditCard, Handshake, ShieldCheck, type LucideIcon } from "lucide-react";
import { sectionH2CenterClass, sectionLedeCenterClass } from "../lib/sectionTypography";

type ValueCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
};

const VALUE_CARDS: ValueCard[] = [
  {
    title: "Tarkastetut vaihtoautot",
    description:
      "Jokainen auto tarkastettu ennen myyntiä. Kerromme kunnon ja historiatiedot avoimesti — ilman yllätyksiä.",
    imageSrc: "/assets/images/car-inspect.jpg",
    imageAlt: "Tarkastettuja vaihtoautoja myyntialueella",
    icon: ShieldCheck,
  },
  {
    title: "Reilu vaihtoautohyvitys",
    description:
      "Arvioimme nykyisen autosi rehellisesti ja tarjoamme kilpailukykyisen hyvityksen — vaihto hoituu samalla käynnillä.",
    imageSrc: "/assets/images/fair-trade-in.jpg",
    imageAlt: "Asiakas ja myyjä sopivat auton vaihdosta",
    icon: Handshake,
  },
  {
    title: "Rahoitus helposti saman katon alta",
    description:
      "Laskuri, tarjous ja rahoituspäätös samassa paikassa. Hoidamme paperit puolestasi selkeästi ja nopeasti.",
    imageSrc: "/assets/financing.jpg",
    imageAlt: "Auto ja rahoituspalvelu",
    icon: CreditCard,
  },
];

function ValueCardItem({ card }: { card: ValueCard }) {
  const Icon = card.icon;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
      <div className="relative pb-13">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={card.imageSrc}
            alt={card.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw, 33vw"
          />

          <svg
            viewBox="0 0 400 48"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 block h-10 w-full text-white"
            aria-hidden
          >
            <path d="M0,48 L0,18 C100,42 300,42 400,18 L400,48 Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className="absolute bottom-0 left-1/2 z-10 grid size-[3.75rem] -translate-x-1/2 translate-y-1/2 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          aria-hidden
        >
          <Icon className="size-6 text-[var(--color-foreground)]" strokeWidth={1.75} />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-8 pt-15 text-center">
        <h3 className="m-0 font-heading text-xl font-bold tracking-tight text-[var(--color-foreground)] md:text-[1.35rem]">
          {card.title}
        </h3>
        <p className="m-0 mt-5 text-sm leading-relaxed text-[var(--color-muted)]">{card.description}</p>
      </div>
    </article>
  );
}

export default function WhyUsSection() {
  return (
    <section
      id="edut"
      className="w-full bg-[var(--color-secondary)] py-14 md:py-20"
      aria-label="Miksi valita Koskiauto"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className={sectionH2CenterClass}>Näin autokaupan kuuluu toimia</h2>
          <p className={sectionLedeCenterClass}>
            Reilu kaupankäynti, tarkastetut autot ja palvelu joka kantaa lupauksen mukaisesti.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {VALUE_CARDS.map((card) => (
            <ValueCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
