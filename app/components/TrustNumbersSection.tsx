import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { sectionH2CenterClass, sectionLedeCenterClass } from "../lib/sectionTypography";

const STATS = [
  { value: "5", label: "Vuotta toiminnassa" },
  { value: "25+", label: "Vaihtuva valikoima" },
  { value: "1000+", label: "Myytyä autoa" },
  { value: "4,7", label: "Asiakastyytyväisyys" },
] as const;

const DEALERSHIP_IMAGE = "/assets/images/why-us.png";

export default function TrustNumbersSection() {
  return (
    <section id="meista" className="w-full bg-white py-14 md:py-20" aria-label="Miksi Koskiauto">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className={sectionH2CenterClass}>Miksi Koskiauto</h2>
          <p className={sectionLedeCenterClass}>
            Luotettava vaihtoautoliike Valkeakoskella — selkeät hinnat, reilu vaihto ja henkilökohtainen
            palvelu samasta osoitteesta.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:mt-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,4fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0 lg:py-2">
            <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="m-0 font-heading text-3xl font-extrabold tracking-tight text-[var(--color-foreground)] md:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="m-0 mt-1.5 text-sm text-[var(--color-muted)]">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <Button href="#contact" variant="secondary" className="mt-10 gap-2">
              Tutustu meihin
              <ArrowRight className="size-4" strokeWidth={2.25} aria-hidden />
            </Button>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[var(--color-secondary)] shadow-[0_8px_32px_rgba(0,0,0,0.08)] sm:min-h-[360px] lg:min-h-[480px] xl:min-h-[520px]">
            <Image
              src={DEALERSHIP_IMAGE}
              alt="Koskiauton liike ja vaihtoautot myyntitilassa"
              fill
              className="object-cover"
              sizes="(max-width: 1023px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
