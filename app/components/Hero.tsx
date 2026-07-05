import Image from "next/image";
import Button from "./Button";
import { sectionEyebrowClass } from "../lib/sectionTypography";

const HERO_IMAGE_SRC =
  "/assets/images/hero.png";

export default function Hero() {
  return (
    <section className="relative flex h-svh max-h-svh min-h-[100vh] w-full flex-col overflow-hidden bg-white md:block">
      <div className="hero-clip-right relative flex-1 bg-[var(--color-secondary)] md:absolute md:inset-0 md:h-full">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={HERO_IMAGE_SRC}
            alt="Autoliikkeen piha täynnä vaihtoautoja auringonlaskussa"
            fill
            className="object-cover"
            sizes="100vw"
            quality={92}
            priority
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-32 bg-gradient-to-b from-black/45 to-transparent md:h-36"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/[0.18]" aria-hidden />
      </div>

      <div className="hero-clip-left relative z-10 flex shrink-0 flex-col bg-white px-6 pb-10 pt-8 sm:px-10 md:absolute md:inset-y-0 md:left-0 md:flex-none md:h-full md:w-[58%] md:max-w-[54rem] md:justify-center md:px-10 md:pb-10 md:pt-28 2xl:px-20">
        <p className={sectionEyebrowClass}>
          Yli 25 vaihtoautoa
        </p>

        <h1 className="mb-2 mt-5 max-w-2xl font-heading text-[2.75rem] font-extrabold leading-[1.02] tracking-tight text-[var(--color-foreground)] sm:text-6xl lg:text-[4.25rem]">
          Löydä seuraava autosi — sinun tarpeeseen.
        </h1>

        <p className="mb-2 mt-7 max-w-xl font-heading text-lg font-medium leading-relaxed text-gray-500 sm:text-xl">
         Monimuotoisia vaihtoehtoja eri hintaluokissa. Henkilöautoista urheiluautoihin, katumaastureista hyötyajoneuvoihin – reilu palvelu alusta loppuun.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="#uusimmat" variant="primary">
            Tutustu valikoimaan
          </Button>
          <Button href="#vaihto" variant="secondary">
            Pyydä vaihtotarjous
          </Button>
        </div>
      </div>
    </section>
  );
}
