"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Valikoima", href: "#uusimmat" },
  { label: "Palvelut", href: "#palvelut" },
  { label: "Yhteystiedot", href: "#contact" },
] as const;

const navLinkClass =
  "whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-white/90 transition-colors hover:text-white " +
  "drop-shadow-[0_1px_3px_rgba(0,0,0,0.55)]";

const navLinkScrolledClass =
  "whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-foreground)]/80 transition-colors hover:text-[var(--color-foreground)]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", menuOpen);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const logo = <Logo onClick={() => setMenuOpen(false)} />;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={[
          "w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto hidden h-16 w-full md:grid md:grid-cols-[52%_1fr] md:items-center lg:h-[4.5rem] lg:grid-cols-[58%_1fr]">
          <div className="flex min-w-0 items-center px-6 lg:px-8 2xl:px-20">{logo}</div>

          <div className="relative flex min-w-0 items-center justify-end gap-4 px-6 lg:gap-6 lg:px-8 2xl:px-12">
            <nav
              className="relative z-10 flex w-fit flex-nowrap items-center justify-end gap-4 whitespace-nowrap lg:gap-7"
              aria-label="Päävalikko"
            >
              {NAV_LINKS.map((item, i) => (
                <span key={item.label} className="inline-flex items-center gap-4 lg:gap-7">
                  {i > 0 ? (
                    <span
                      className={scrolled ? "text-[var(--color-muted)]" : "text-white/50"}
                      aria-hidden
                    >
                      •
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className={scrolled ? navLinkScrolledClass : navLinkClass}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}

              <Button
                href="#vaihto"
                variant="primary"
                className={[
                  "relative z-10 shrink-0 px-6 py-3 text-xs uppercase tracking-wide",
                  scrolled ? "" : "drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)]",
                ].join(" ")}
              >
                Pyydä vaihtotarjous
              </Button>
            </nav>
          </div>
        </div>

        <div className="mx-auto flex h-16 items-center justify-between gap-4 px-5 md:hidden">
          {logo}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={[
              "grid size-10 place-items-center rounded-xl border transition",
              scrolled
                ? "border-[var(--color-border)] bg-white text-[var(--color-foreground)]"
                : "border-white/20 bg-black/20 text-white backdrop-blur-sm",
            ].join(" ")}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={[
          "fixed inset-0 z-[60] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        // inert when closed: keeps slide animation but removes focusable nodes from a11y tree
        {...(!menuOpen ? ({ inert: true } as React.HTMLAttributes<HTMLDivElement>) : {})}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={["absolute inset-0 bg-black/50 transition-opacity", menuOpen ? "opacity-100" : "opacity-0"].join(
            " ",
          )}
          onClick={() => setMenuOpen(false)}
          aria-label="Sulje valikko"
        />
        <aside
          className={[
            "absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-white p-6 shadow-2xl transition-transform duration-300",
            menuOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <nav className="mt-4 flex flex-col gap-1" aria-label="Mobiilivalikko">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={menuOpen ? 0 : -1}
                className="rounded-[10px] px-3 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href="#vaihto"
              variant="primary"
              className="mt-4 w-full"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            >
              Pyydä vaihtotarjous
            </Button>
          </nav>
        </aside>
      </div>
    </header>
  );
}
