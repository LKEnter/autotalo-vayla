import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "../lib/contact";
import Logo from "./Logo";

const FOOTER_LINKS = [
  { label: "Valikoima", href: "#uusimmat" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Rahoitus", href: "#rahoitus" },
  { label: "Yhteystiedot", href: "#contact" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#111111] text-[#f5f5f5]/72">
      <div className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo onDark />
            <p className="m-0 mt-4 text-sm leading-relaxed">
              Vaihtoautot, rahoitus ja vaihtoapu — selkeästi ja luotettavasti Valkeakoskella.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Alatunniste">
            {FOOTER_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#f5f5f5]/80 no-underline transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="m-0 list-none space-y-3 p-0 text-sm lg:text-left">
            <li className="lg:flex lg:justify-left">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 text-[#f5f5f5]/88 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-[#f5f5f5]/70" aria-hidden />
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li className="lg:flex lg:justify-left">
              <a
                href={CONTACT.emailHref}
                className="inline-flex items-center gap-2 text-[#f5f5f5]/88 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-[#f5f5f5]/70" aria-hidden />
                {CONTACT.emailLabel}
              </a>
            </li>
            <li className="lg:flex lg:justify-left">
              <a
                href={CONTACT.mapHref}
                className="inline-flex items-center gap-2 text-[#f5f5f5]/88 transition-colors hover:text-white"
              >
                <MapPin className="size-4 shrink-0 text-[#f5f5f5]/70" aria-hidden />
                <span>
                  {CONTACT.addressLine1}, {CONTACT.addressLine2}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.08] pt-6 text-xs text-[#f5f5f5]/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {year} Koskiauto. Kaikki oikeudet pidätetään.</p>
        </div>
      </div>
    </footer>
  );
}
