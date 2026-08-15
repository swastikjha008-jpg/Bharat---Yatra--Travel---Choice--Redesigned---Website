// SAMPLE / DEMO CONTENT — not real customers.
// These exist purely so the Customers page has a believable, finished look
// before real reviews come in. Every entry is deliberately named "Sample
// ..." so nothing here can be mistaken for a genuine testimonial, and each
// carries isSample:true so the UI can render a visible "Sample review" tag.
// Replace this array with real, submitted reviews when available — do not
// relabel these as real without a genuine source.

export type Testimonial = {
  id: string;
  name: string;
  context: string;
  destination: string;
  rating: number;
  review: string;
  isSample: true;
};

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: "sample-1",
    name: "Sample Customer",
    context: "Family Trip",
    destination: "Manali",
    rating: 5,
    review:
      "A smooth and beautifully organised trip from start to finish. The planning was easy and the experience was memorable.",
    isSample: true,
  },
  {
    id: "sample-2",
    name: "Sample Family",
    context: "Religious Tour",
    destination: "Ayodhya",
    rating: 5,
    review:
      "Cab transfers and sightseeing were arranged without any hassle. It felt like the itinerary was planned with our pace in mind.",
    isSample: true,
  },
  {
    id: "sample-3",
    name: "Sample Couple",
    context: "Honeymoon",
    destination: "Shimla",
    rating: 4,
    review:
      "A relaxed few days in the hills with good stays and easy logistics. Would have liked a bit more free time on day two.",
    isSample: true,
  },
  {
    id: "sample-4",
    name: "Sample Traveller",
    context: "Solo Trip",
    destination: "Varanasi",
    rating: 5,
    review:
      "Everything from the hotel to the Ganga Aarti viewing point was well thought out. Communication before the trip was clear and quick.",
    isSample: true,
  },
  {
    id: "sample-5",
    name: "Sample Group",
    context: "Friends Trip",
    destination: "Manali",
    rating: 4,
    review:
      "Good value for a short trip. Drivers were punctual and the Solang Valley stop was a highlight for all of us.",
    isSample: true,
  },
  {
    id: "sample-6",
    name: "Sample Family",
    context: "Family Trip",
    destination: "Shimla",
    rating: 5,
    review:
      "Booking was straightforward and the team was responsive whenever we had questions on the road. A calm, well-run trip overall.",
    isSample: true,
  },
];
