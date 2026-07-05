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

export const NEWEST_CARS: CarListing[] = [
  {
    id: "15840713",
    listingId: "15840713",
    year: 2015,
    make: "BMW",
    model: "520",
    trim: "520d Sedan Business Exclusive xDrive",
    mileage: 189_000,
    transmission: "Automaatti",
    fuel: "Diesel",
    price: 13_990,
    imageSrc: "/assets/images/cars/bmw-520.webp",
    imageAlt: "BMW 520 sininen sedan ulkopuistossa",
  },
  {
    id: "15839178",
    listingId: "15839178",
    year: 2017,
    make: "Mercedes-Benz",
    model: "C",
    trim: "400 AMG-Line Cabriolet 4Matic",
    mileage: 199_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 39_900,
    imageSrc: "/assets/images/cars/mersu-c.webp",
    imageAlt: "Mercedes-Benz C punainen cabriolet",
  },
  {
    id: "15833458",
    listingId: "15833458",
    year: 2025,
    make: "Audi",
    model: "RS Q8",
    trim: "4.0 V8 Performance Quattro",
    mileage: 6_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 329_000,
    imageSrc: "/assets/images/cars/audi-q8.webp",
    imageAlt: "Audi RS Q8 harmaa SUV",
  },
  {
    id: "15829239",
    listingId: "15829239",
    year: 2023,
    make: "Renault",
    model: "Trafic",
    trim: "2.0 dCi Blue Nordic Edition L2H1",
    mileage: 62_000,
    transmission: "Automaatti",
    fuel: "Diesel",
    price: 24_900,
    imageSrc: "/assets/images/cars/renault-trafic.webp",
    imageAlt: "Renault Trafic valkoinen pakettiauto",
  },
  {
    id: "15827059",
    listingId: "15827059",
    year: 2014,
    make: "Mercedes-Benz",
    model: "CLA 45 AMG",
    trim: "45 AMG 4Matic",
    mileage: 109_000,
    transmission: "Automaatti",
    fuel: "Bensiini",
    price: 32_900,
    imageSrc: "/assets/images/cars/mersu-cla.webp",
    imageAlt: "Mercedes-Benz CLA 45 AMG valkoinen coupe",
  },
  {
    id: "15809303",
    listingId: "15809303",
    year: 2017,
    make: "BMW",
    model: "740",
    trim: "740Le iPerformance M-Sport xDrive",
    mileage: 139_000,
    transmission: "Automaatti",
    fuel: "Hybridi (bensiini/sähkö)",
    price: 32_900,
    imageSrc: "/assets/images/cars/bmw-740.webp",
    imageAlt: "BMW 740 harmaa hybridisedan",
  },
  {
    id: "15791103",
    listingId: "15791103",
    year: 2016,
    make: "Volvo",
    model: "XC90",
    trim: "T8 Twin Engine AWD Inscription",
    mileage: 132_000,
    transmission: "Automaatti",
    fuel: "Hybridi (bensiini/sähkö)",
    price: 32_880,
    imageSrc: "/assets/images/cars/volvo-xc90.webp",
    imageAlt: "Volvo XC90 valkoinen SUV",
  },
  {
    id: "15763039",
    listingId: "15763039",
    year: 2025,
    make: "Mercedes-Benz",
    model: "GLS",
    trim: "450d AMG-Styling 4Matic 7hlö",
    mileage: 17_000,
    transmission: "Automaatti",
    fuel: "Diesel",
    price: 189_900,
    imageSrc: "/assets/images/cars/mersu-gls1.webp",
    imageAlt: "Mercedes-Benz GLS musta SUV",
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
