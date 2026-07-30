/** Shared contact details — fictional demo placeholders */
export const CONTACT = {
  phoneLabel: "040 000 0002",
  phoneHref: "tel:+358400000002",
  emailLabel: "info@autotalo-vayla.fi",
  emailHref: "mailto:info@autotalo-vayla.fi",
  addressLine1: "Esimerkkikatu 1",
  addressLine2: "00100 Helsinki",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Esimerkkikatu+1%2C+00100+Helsinki%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Esimerkkikatu+1,+00100+Helsinki,+Suomi&output=embed&z=15";

export const OPENING_HOURS = [
  { day: "Ma–Pe", hours: "09:00–18:00" },
  { day: "La", hours: "10:00–15:00" },
  { day: "Su", hours: "Suljettu" },
] as const;
