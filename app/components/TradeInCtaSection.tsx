import Image from "next/image";
import Link from "next/link";

const TRADE_IN_IMAGE =
  "/assets/images/fair-trade-in.jpg";

export default function TradeInCtaSection() {
  return (
    <section id="vaihto" className="w-full bg-[var(--color-secondary)] py-14 md:py-20" aria-label="Vaihtotarjous">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className="relative min-h-[520px] overflow-hidden rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:min-h-[460px] lg:min-h-[420px]">
          <Image
            src={TRADE_IN_IMAGE}
            alt="Myyjä ja asiakas keskustelevat auton vaihdosta liikkeessä"
            fill
            className="object-cover object-center lg:object-[70%_center]"
            sizes="(max-width: 1023px) 100vw, 1440px"
          />

          {/* Desktop: yellow fades into photo */}
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) 36%, color-mix(in srgb, var(--color-accent) 72%, transparent) 52%, transparent 70%)",
            }}
            aria-hidden
          />

          {/* Mobile: yellow covers top, photo visible below */}
          <div
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent) 0%, var(--color-accent) 52%, color-mix(in srgb, var(--color-accent) 55%, transparent) 68%, transparent 88%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:max-w-[44%] lg:px-14 lg:py-16">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-foreground)]/65">
              Vaihtoauto
            </p>

            <h2 className="m-0 mt-4 font-heading text-[1.75rem] font-extrabold leading-[1.08] tracking-tight text-[var(--color-foreground)] sm:text-4xl lg:text-[2.5rem]">
              Saat reilun tarjouksen nykyisestä autostasi.
            </h2>

            <p className="m-0 mt-4 max-w-md text-base leading-relaxed text-[var(--color-foreground)]/80">
              Tuo autosi arvioitavaksi tai lähetä tiedot verkossa. Tarjoamme kilpailukykyisen hyvityshinnan
              nopeasti.
            </p>

            <Link
              href="#contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-foreground)] bg-[var(--color-foreground)] px-8 py-3.5 text-sm font-semibold text-white no-underline transition-[transform,background-color] duration-200 hover:scale-[1.02] hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-accent)]"
            >
              Pyydä vaihtotarjous
              <span className="ml-1.5" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
