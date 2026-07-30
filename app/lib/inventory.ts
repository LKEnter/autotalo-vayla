export type CarListing = {
  id: string;
  listingId: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage: number;
  transmission: "Automaatti" | "Manuaali" | "Ei tiedossa";
  fuel: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
};

/** Demo inventory — stock photos only, no real dealer premises/plates. */
export const NEWEST_CARS: CarListing[] = [
  {
    id: "demo-1001",
    listingId: "demo-1001",
    year: 2019,
    make: "BMW",
    model: "M5",
    trim: "Competition xDrive",
    mileage: 78_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 74_900,
    imageSrc: "/assets/images/cars/bmw-m5.webp",
    imageAlt: "Harmaa BMW M5 Competition liikenteessä",
  },
  {
    id: "demo-1002",
    listingId: "demo-1002",
    year: 2020,
    make: "Mercedes-AMG",
    model: "GT R",
    trim: "V8 Biturbo",
    mileage: 32_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 149_900,
    imageSrc: "/assets/images/cars/mercedes-amg-gtr.webp",
    imageAlt: "Mattaharmaa Mercedes-AMG GT R",
  },
  {
    id: "demo-1003",
    listingId: "demo-1003",
    year: 2021,
    make: "Ferrari",
    model: "F8 Tributo",
    trim: "3.9 V8 Twin Turbo",
    mileage: 9_500,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 289_000,
    imageSrc: "/assets/images/cars/ferrari-f8.webp",
    imageAlt: "Punainen Ferrari F8 Tributo",
  },
  {
    id: "demo-1004",
    listingId: "demo-1004",
    year: 2015,
    make: "Honda",
    model: "CR-V",
    trim: "1.6 i-DTEC Executive 4WD",
    mileage: 142_000,
    transmission: "Automaatti",
    fuel: "Diesel",
    price: 18_900,
    imageSrc: "/assets/images/cars/honda-crv.webp",
    imageAlt: "Valkoinen Honda CR-V vuoristomaisemassa",
  },
  {
    id: "demo-1005",
    listingId: "demo-1005",
    year: 2017,
    make: "BMW",
    model: "420",
    trim: "420i Coupé M Sport",
    mileage: 98_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 27_900,
    imageSrc: "/assets/images/cars/bmw-420.webp",
    imageAlt: "Sininen BMW 4-sarjan coupe sivuprofiilissa",
  },
  {
    id: "demo-1006",
    listingId: "demo-1006",
    year: 2022,
    make: "Tesla",
    model: "Model 3",
    trim: "Long Range Dual Motor",
    mileage: 41_000,
    transmission: "Automaatti",
    fuel: "Sähkö",
    price: 36_900,
    imageSrc: "/assets/images/cars/tesla-model-3.webp",
    imageAlt: "Valkoinen Tesla Model 3 vuoristotiellä",
  },
  {
    id: "demo-1007",
    listingId: "demo-1007",
    year: 2018,
    make: "BMW",
    model: "M4",
    trim: "Coupé Competition",
    mileage: 67_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 54_900,
    imageSrc: "/assets/images/cars/bmw-m4.webp",
    imageAlt: "Musta BMW M4 Coupé vauhdissa",
  },
  {
    id: "demo-1008",
    listingId: "demo-1008",
    year: 2019,
    make: "Lamborghini",
    model: "Huracán",
    trim: "LP 610-4",
    mileage: 18_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 219_000,
    imageSrc: "/assets/images/cars/lamborghini-huracan.webp",
    imageAlt: "Keltainen Lamborghini Huracán kaupunkiympäristössä",
  },
];

export function formatMileage(km: number): string {
  return `${km.toLocaleString("fi-FI")} km`;
}

export function formatPrice(eur: number): string {
  return `${eur.toLocaleString("fi-FI")} €`;
}

export function formatCarTitle(car: CarListing): string {
  return `${car.make} ${car.model}`;
}
