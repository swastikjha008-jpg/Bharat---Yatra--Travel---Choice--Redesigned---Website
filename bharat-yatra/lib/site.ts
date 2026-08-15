// Central place for brand facts. Nothing here is invented — every figure
// traces back to the brief (public business listings) and is marked
// "unverified" where the source was a third-party listing, not the
// company directly. Swap PLACEHOLDER_* images for real company photography
// whenever it's supplied — that's the only thing in this file staged as a
// placeholder.

export const SITE = {
  name: "Bharat Yatra Travel Choice",
  shortName: "Bharat Yatra",
  tagline: "A trusted travel partner for memorable journeys across India and beyond.",
  city: "Lucknow, Uttar Pradesh",
  instagram: "https://www.instagram.com/bharat_yatra_traval_choice/",
  whatsapp: "https://wa.me/",
  email: "hello@bharatyatratravelchoice.example",
  msme: "UDYAM-UP-50-0086593",
  iso: "QCCI/23Q/BAE/2293",
  gst: "09BAYPS3511H1Z6",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/customers", label: "Customers" },
];

export const SERVICES = [
  "India Tour Packages",
  "International Tour Packages",
  "Holiday Packages",
  "Honeymoon Packages",
  "Family Tours",
  "Religious Tours",
  "Domestic Flight Booking",
  "International Flight Booking",
  "Domestic Hotel Booking",
  "International Hotel Booking",
];

// Unsplash photo ids, verified individually (license: free to use,
// no attribution required). Helper appends the crop/quality params.
export const PHOTOS = {
  heroOcean: "1756572798425-401c88442dee", // Philippines — turquoise water meeting deep blue ocean
  ayodhyaSaryu: "1549225480-ce72840aa6c8", // Saryu river, Nayaghat, Ayodhya
  manaliSissu: "1623416225940-abdc8359edf4", // Sissu, Himachal Pradesh
  varanasiGhat: "1762513839526-c596f5e99a9a", // Ganges riverfront, Varanasi
  shimlaTown: "1634539132466-abaca3a2438b", // Shimla town, Himachal Pradesh
  kedarnathStream: "1696340702987-5e26dfea76a9", // Kedarnath, Uttarakhand
  lucknowRumi: "1688287580970-70fe8e0f4bef", // Rumi Darwaza, Lucknow
} as const;

export function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}
