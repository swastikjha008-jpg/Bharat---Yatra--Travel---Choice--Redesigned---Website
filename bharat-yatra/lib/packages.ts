import { PHOTOS } from "./site";

export type Package = {
  slug: string;
  destination: string;
  duration: string;
  startingPrice: string;
  photo: string;
  highlights: string[];
  itinerary: { day: string; plan: string }[];
  inclusions: string[];
  exclusions?: string[];
  /** Every package here came from a third-party listing, not a price
   * confirmed directly with Bharat Yatra Travel Choice. Keep this true
   * until the company confirms — it drives the "unverified" badge and
   * the "starting from" wording sitewide. */
  verified: false;
};

export const PACKAGES: Package[] = [
  {
    slug: "ayodhya",
    destination: "Ayodhya",
    duration: "2 Nights / 3 Days",
    startingPrice: "₹7,326",
    photo: PHOTOS.ayodhyaSaryu,
    highlights: ["Ram Mandir", "Saryu River", "Local sightseeing"],
    itinerary: [
      { day: "Day 1", plan: "Lucknow → Ayodhya" },
      { day: "Day 2", plan: "Ayodhya sightseeing" },
      { day: "Day 3", plan: "Return to Lucknow" },
    ],
    inclusions: ["Private cab", "Sightseeing"],
    verified: false,
  },
  {
    slug: "manali",
    destination: "Manali",
    duration: "4 Nights / 5 Days",
    startingPrice: "₹6,599",
    photo: PHOTOS.manaliSissu,
    highlights: ["Solang Valley", "Hadimba Devi Temple", "Vashisht", "Mountain sightseeing"],
    itinerary: [
      { day: "Day 1", plan: "Arrival in Manali, local sightseeing" },
      { day: "Day 2", plan: "Solang Valley excursion" },
      { day: "Day 3", plan: "Hadimba Devi Temple & Old Manali" },
      { day: "Day 4", plan: "Vashisht & nearby villages" },
      { day: "Day 5", plan: "Departure" },
    ],
    inclusions: ["Cab transfers", "Sightseeing", "Breakfast", "Lunch", "Dinner"],
    exclusions: [
      "Airfare",
      "Airport transfers",
      "Early check-in / late checkout",
      "Optional outdoor activities",
    ],
    verified: false,
  },
  {
    slug: "varanasi",
    destination: "Varanasi",
    duration: "1 Night / 2 Days",
    startingPrice: "₹5,660",
    photo: PHOTOS.varanasiGhat,
    highlights: ["Ganga Aarti", "Annapurna Temple", "Sarnath", "Dhamek Stupa"],
    itinerary: [
      { day: "Day 1", plan: "Arrival, Ganga Aarti in the evening" },
      { day: "Day 2", plan: "Sarnath & temple sightseeing, departure" },
    ],
    inclusions: ["Hotel accommodation", "Cab transfers", "Sightseeing", "Breakfast"],
    verified: false,
  },
  {
    slug: "shimla",
    destination: "Shimla",
    duration: "3 Nights / 4 Days",
    startingPrice: "₹4,200",
    photo: PHOTOS.shimlaTown,
    highlights: ["Jakhu Temple", "Kufri", "Viceregal Lodge", "Adventure activities"],
    itinerary: [
      { day: "Day 1", plan: "Arrival, Mall Road & The Ridge" },
      { day: "Day 2", plan: "Kufri excursion" },
      { day: "Day 3", plan: "Jakhu Temple & Viceregal Lodge" },
      { day: "Day 4", plan: "Departure" },
    ],
    inclusions: ["Cab transfers", "Sightseeing", "Accommodation", "Welcome drink", "Taxes/tolls"],
    verified: false,
  },
];
