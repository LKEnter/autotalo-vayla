"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconStar } from "./icons";
import { sectionH2CenterClass, sectionLedeCenterClass } from "../lib/sectionTypography";

const REDUCE_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const LG_QUERY = "(min-width: 1024px)";
const SM_QUERY = "(min-width: 640px)";

function subscribeMediaQuery(query: string, cb: () => void) {
  const m = window.matchMedia(query);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}

function getSnapshot(query: string) {
  return window.matchMedia(query).matches;
}

function getServerSnapshot() {
  return false;
}

function useVisibleCount() {
  const isLg = useSyncExternalStore(
    (cb) => subscribeMediaQuery(LG_QUERY, cb),
    () => getSnapshot(LG_QUERY),
    getServerSnapshot,
  );
  const isSm = useSyncExternalStore(
    (cb) => subscribeMediaQuery(SM_QUERY, cb),
    () => getSnapshot(SM_QUERY),
    getServerSnapshot,
  );

  if (isLg) return 3;
  if (isSm) return 2;
  return 1;
}

const GOOGLE_RATING = "4,7";
const GOOGLE_REVIEW_COUNT = 27;

const TESTIMONIALS = [
  {
    text: "Suosittelen kaikille Valkeakosken Koskiautoa, jos on autokaupoille asiaa. Asiakaspalvelu oli maanläheistä ja kaikin puolin loistavaa. Itse tuote eli ostamani auto vastasi täysin netissä ilmoitettuja tietoja ja auton hinta/rahoitus autoon tuli edulliseksi. Hinta/laatu-suhde on tässä liikkeessä asiakasystävällinen!",
    author: "Sami Koski",
  },
  {
    text: "Omasta kokemuksesta voin kertoa, että asiat sujuivat niin hyvin ja nopeasti aivan kuten oltiin puhelimessa sovittu! Iloinen ja asiantunteva henkilökunta!",
    author: "Jari Salonen",
  },
  {
    text: "Sujuvat yhteydenotot ja loistavaa asiakaspalvelua. Kaupanteko sujui arkipyhästä huolimatta. Lämpimät suositukset. Tässä liikkeessä asioi mielellään.",
    author: "Virpi Kantomäki",
  },
  {
    text: "Erinomainen, asiantunteva ja ystävällinen!",
    author: "Miska Vilkki",
  },
  {
    text: "Itse painelin yötä myöten pohjoisesta paikan päälle hakemaan autoa ja odotukseni ovat yleensä aina vähän skeptiset, mitä tulee suomalaiseen palveluun yleensä. Myyjä saapui paikalle tulevan autoni kanssa ja yhtä iloa ja hymyä oli mies ja itse vaikka väsynyt olinkin, niin sain siitä virtaa kuin mahdoton. Palvelu siis täys kymppi ja aivan mahtavia tyyppejä löytyy liikkeestä. Auton vaihto onnistui ilman mitään yskimistä.",
    author: "Ari-Pekka Pukema",
  },
  {
    text: "Täällä kaupat sujuivat täydellisesti. Myyjä erittäin miellyttävä ja asiat tapahtui juuri niin kuin oli sovittu. Vahva suositus Koskiautolle.",
    author: "Teemu Stolpe",
  },
  {
    text: "Erinomaista ja asiantuntevaa palvelua niin ostotilanteessa kuin pienessä jälkikäteen ilmenneessä häiriötilanteessakin. 110% suositus kaikille heidän palveluistaan.",
    author: "Niko Tyybäkinoja",
  },
  {
    text: "Vielä ei kauppoihin päästy, mutta mukava liike asioida. Varmasti vielä kaupat saadaan. Jos ei tästä kyseisestä autosta, niin tulevaisuudessa.",
    author: "Veli Niemi",
  },
  {
    text: "Asiantunteva ja osaava porukka, joka kerta hierottu molempia osapuolia miellyttävät kaupat! Autot olleet siinä kunnossa kuin on sanottu rehellisesti. Erittäin iso suositus!",
    author: "Puinu",
  },
] as const;

function StarRow({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const sizeClass = size === "sm" ? "size-3.5" : "size-4";
  return (
    <span
      className={["inline-flex items-center gap-0.5 text-[var(--color-accent)]", className].join(" ")}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={`${sizeClass} shrink-0`} />
      ))}
    </span>
  );
}

function TestimonialCard({ text, author }: { text: string; author: string }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] md:p-10">
      <span
        className="pointer-events-none absolute left-5 top-2 select-none font-heading text-[7rem] font-bold leading-none text-[var(--color-foreground)] opacity-[0.05] md:left-6 md:text-[8rem]"
        aria-hidden
      >
        &ldquo;
      </span>

      <StarRow className="relative z-10" />

      <blockquote className="relative z-10 m-0 mt-5 flex-1">
        <p className="text-[1.125rem] leading-[1.65] text-[var(--color-foreground)] md:text-xl md:leading-[1.7]">
          {text}
        </p>
      </blockquote>

      <footer className="relative z-10 mt-8 border-t border-[var(--color-border)] pt-6">
        <p className="m-0 font-semibold text-[var(--color-foreground)]">{author}</p>
        <p className="m-0 mt-1 flex items-center gap-1.5 text-sm text-[var(--color-muted)]">
          <StarRow size="sm" />
          <span>Google</span>
        </p>
      </footer>
    </article>
  );
}

export default function TestimonialsSection() {
  const reduceMotion = useSyncExternalStore(
    (cb) => subscribeMediaQuery(REDUCE_MOTION_QUERY, cb),
    () => getSnapshot(REDUCE_MOTION_QUERY),
    getServerSnapshot,
  );

  const visibleCount = useVisibleCount();
  const pageCount = Math.max(1, TESTIMONIALS.length - visibleCount + 1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    setActivePage((p) => Math.min(p, pageCount - 1));
  }, [pageCount]);

  const visibleItems = TESTIMONIALS.slice(activePage, activePage + visibleCount);

  const goPrev = useCallback(() => {
    setActivePage((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setActivePage((p) => Math.min(pageCount - 1, p + 1));
  }, [pageCount]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [goNext, goPrev],
  );

  const gridCols =
    visibleCount === 3 ? "lg:grid-cols-3" : visibleCount === 2 ? "sm:grid-cols-2" : "grid-cols-1";

  return (
    <section
      id="arvostelut"
      className="w-full bg-[var(--color-secondary)] py-14 md:py-20"
      aria-label="Asiakaskokemuksia"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className={sectionH2CenterClass}>Mitä asiakkaamme sanovat</h2>
          <p className={sectionLedeCenterClass}>
            <span className="inline-flex flex-wrap items-center justify-center gap-x-1.5 font-semibold text-[var(--color-foreground)]">
              <StarRow size="sm" />
              {GOOGLE_RATING} / 5
            </span>
            {" — "}
            Perustuu {GOOGLE_REVIEW_COUNT} Google-arvosteluun
          </p>
        </header>

        <div
          className="mt-10 md:mt-12"
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-roledescription="carousel"
          aria-label="Asiakasarvostelut"
        >
          <div
            className={`grid grid-cols-1 gap-6 ${gridCols}`}
            style={
              reduceMotion
                ? undefined
                : { transition: "opacity 320ms ease" }
            }
          >
            {visibleItems.map((item) => (
              <TestimonialCard key={`${item.author}-${activePage}`} text={item.text} author={item.author} />
            ))}
          </div>

          <nav
            className="mt-10 flex items-center justify-center gap-4"
            aria-label="Arvostelujen sivutus"
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={activePage === 0}
              className="grid size-9 place-items-center rounded-full text-[var(--color-foreground)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50"
              aria-label="Edellinen"
            >
              <ChevronLeft className="size-5" strokeWidth={1.75} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: pageCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActivePage(i)}
                  className="grid size-11 place-items-center rounded-full transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50"
                  aria-label={`Sivu ${i + 1}`}
                  aria-current={i === activePage ? "true" : undefined}
                >
                  <span
                    className={[
                      "rounded-full transition",
                      i === activePage
                        ? "size-2.5 bg-[var(--color-foreground)]"
                        : "size-2 bg-[var(--color-muted)]/40",
                    ].join(" ")}
                    aria-hidden
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={activePage >= pageCount - 1}
              className="grid size-9 place-items-center rounded-full text-[var(--color-foreground)] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50"
              aria-label="Seuraava"
            >
              <ChevronRight className="size-5" strokeWidth={1.75} />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
