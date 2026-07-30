import Image from "next/image";
import Link from "next/link";
import { Gauge, Settings2 } from "lucide-react";
import Button from "./Button";
import { formatCarTitle, formatMileage, formatPrice, NEWEST_CARS, type CarListing } from "../lib/inventory";
import { sectionH2Class, sectionLedeClass } from "../lib/sectionTypography";

function CarCard({ car }: { car: CarListing }) {
  const title = formatCarTitle(car);

  return (
    <Link
      href="#"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]/50 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--color-secondary)]">
        <Image
          src={car.imageSrc}
          alt={car.imageAlt}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
          quality={70}
        />
        <span className="absolute left-3 top-3 rounded-md bg-[var(--color-accent)] px-2.5 py-1 text-xs font-bold text-[var(--color-on-primary)]">
          {car.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="m-0 font-heading text-lg font-bold tracking-tight text-[var(--color-foreground)]">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Gauge className="size-3.5 shrink-0" aria-hidden />
            {formatMileage(car.mileage)}
          </span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1.5">
            <Settings2 className="size-3.5 shrink-0" aria-hidden />
            {car.transmission}
          </span>
        </div>

        <p className="m-0 mt-4 font-heading text-2xl font-extrabold tracking-tight text-[var(--color-foreground)]">
          {formatPrice(car.price)}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-foreground)]">
          Tutustu
          <span className="text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function NewestCarsSection() {
  return (
    <section id="uusimmat" className="w-full bg-[var(--color-secondary)] py-14 md:py-20" aria-label="Uusimmat autot">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="max-w-2xl">
          <h2 className={sectionH2Class}>Tuoreimmat valikoimassa</h2>
          <p className={sectionLedeClass}>
            Tuoreimmat saapuneet vaihtoautot — selkeät hinnat, tarkistetut tiedot ja nopea kauppa.
          </p>
        </header>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-7">
          {NEWEST_CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="#" variant="primary">
            Tutustu koko valikoimaan
          </Button>
        </div>
      </div>
    </section>
  );
}
