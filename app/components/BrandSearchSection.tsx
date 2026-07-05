import Link from "next/link";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

const BRANDS = [
  { name: "Toyota", count: 24 },
  { name: "Volkswagen", count: 18 },
  { name: "Mercedes-Benz", count: 12 },
  { name: "Volvo", count: 15 },
  { name: "BMW", count: 11 },
  { name: "Audi", count: 9 },
  { name: "Ford", count: 14 },
  { name: "Skoda", count: 10 },
] as const;

export default function BrandSearchSection() {
  return (
    <section id="merkit" className="w-full bg-white py-14 md:py-20" aria-label="Hae merkillä">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="max-w-2xl">
          <h2 className={sectionH2Class}>Hae merkillä</h2>
          <p className={sectionLedeClass}>
            Selaa valikoimaa suosituimpien merkkien mukaan. Kaikki autot samassa paikassa.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.name}
              href="#"
              className="group flex flex-col items-start justify-between rounded-xl border border-[var(--color-border)] bg-white px-5 py-5 shadow-[0_1px_4px_rgba(0,0,0,0.03)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-foreground)]/20 hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2 sm:px-6 sm:py-6"
            >
              <span className="font-heading text-lg font-bold tracking-tight text-[var(--color-foreground)] sm:text-xl">
                {brand.name}
              </span>
              <span className="mt-3 text-sm text-[var(--color-muted)]">
                {brand.count} autoa
                <span className="ml-1 text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
