/** Shared section typography — left-aligned (action) vs centered (brand/trust). */

export const sectionEyebrowClass =
  "m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]";

export const sectionEyebrowDarkClass =
  "m-0 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f5f5]/60";

/** Left-aligned h2 — use after eyebrow */
export const sectionH2Class =
  "font-heading m-0 mt-3 text-3xl font-semibold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl";

/** Centered h2 — use after eyebrow */
export const sectionH2CenterClass =
  "font-heading m-0 mt-3 text-3xl font-bold tracking-tight text-[var(--color-foreground)] leading-tight md:text-4xl";

/** @deprecated Use sectionH2CenterClass */
export const sectionH2FlankedClass = sectionH2CenterClass;

/** Left-aligned lede */
export const sectionLedeClass =
  "m-0 mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg";

/** Centered lede */
export const sectionLedeCenterClass =
  "m-0 mt-4 mx-auto max-w-2xl text-center text-base leading-relaxed text-[var(--color-muted)] md:text-lg";

export const sectionLedeDarkClass =
  "m-0 mt-4 max-w-lg text-base leading-relaxed text-[#f5f5f5]/72 md:text-lg";
