/** Shared contact details */
export const CONTACT = {
  phoneLabel: "040 086 1500",
  phoneHref: "tel:+358400861500",
  emailLabel: "myynti@koskiauto.fi",
  emailHref: "mailto:myynti@koskiauto.fi",
  addressLine1: "Sammonkatu 6",
  addressLine2: "37600 Valkeakoski",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Sammonkatu+6%2C+37600+Valkeakoski%2C+Suomi",
} as const;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Sammonkatu+6,+37600+Valkeakoski,+Suomi&output=embed&z=15";

export const OPENING_HOURS = [
  { day: "Ma–Pe", hours: "09:00–18:00" },
  { day: "La", hours: "10:00–15:00" },
  { day: "Su", hours: "Suljettu" },
] as const;
