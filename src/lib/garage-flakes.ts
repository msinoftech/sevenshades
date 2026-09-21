export type FlakeCollection = "blends" | "solids";

export type GarageFlakeOption = {
  id: string;
  name: string;
  collection: FlakeCollection;
  image: string;
  tone: "Neutral" | "Cool" | "Warm" | "Dark";
  description: string;
};

export const flakeCollectionLabels: Record<FlakeCollection, string> = {
  blends: "Decorative Chip Blends",
  solids: "Decorative Chip Solids",
};

export const garageFlakeOptions: GarageFlakeOption[] = [
  {
    id: "basalt-stone",
    name: "Basalt Stone",
    collection: "blends",
    image: "/images/flakes/swatches/basalt-stone.jpg",
    tone: "Cool",
    description:
      "Cool grey blend with silver and slate chips — clean, modern, and ideal for garages with lighter vehicles.",
  },
  {
    id: "shoreline",
    name: "Shoreline",
    collection: "blends",
    image: "/images/flakes/swatches/shoreline.jpg",
    tone: "Warm",
    description:
      "Warm sandy tones with beige, tan, and cream flakes — a soft coastal look for bright, welcoming garages.",
  },
  {
    id: "creekbed",
    name: "Creekbed",
    collection: "blends",
    image: "/images/flakes/swatches/creekbed.jpg",
    tone: "Warm",
    description:
      "Earthy mix of tan, brown, grey, and white chips — natural character that pairs well with transitional homes.",
  },
  {
    id: "gunflint-trail",
    name: "Gunflint Trail",
    collection: "blends",
    image: "/images/flakes/swatches/gunflint-trail.jpg",
    tone: "Dark",
    description:
      "Charcoal, grey, and warm tan accents — rugged depth that hides everyday dust and scuffs.",
  },
  {
    id: "nightfall",
    name: "Nightfall",
    collection: "blends",
    image: "/images/flakes/swatches/nightfall.jpg",
    tone: "Dark",
    description:
      "Deep charcoal and black flake blend — dramatic under garage lighting for luxury or collector bays.",
  },
  {
    id: "domino",
    name: "Domino",
    collection: "blends",
    image: "/images/flakes/swatches/domino.jpg",
    tone: "Neutral",
    description:
      "High-contrast black, white, and grey chips — bold salt-and-pepper look that reads crisp and intentional.",
  },
  {
    id: "cabin-fever",
    name: "Cabin Fever",
    collection: "blends",
    image: "/images/flakes/swatches/cabin-fever.jpg",
    tone: "Neutral",
    description:
      "Balanced grey mix with black flecks — a versatile neutral that works with most home exteriors.",
  },
  {
    id: "gravel",
    name: "Gravel",
    collection: "blends",
    image: "/images/flakes/swatches/gravel.jpg",
    tone: "Neutral",
    description:
      "Light grey and white stone-like chips — opens the garage visually and reflects natural light.",
  },
  {
    id: "raven",
    name: "Raven",
    collection: "solids",
    image: "/images/flakes/swatches/raven.jpg",
    tone: "Dark",
    description:
      "Predominantly black with white and grey accents — high-contrast drama for show garages.",
  },
  {
    id: "wombat",
    name: "Wombat",
    collection: "solids",
    image: "/images/flakes/swatches/wombat.jpg",
    tone: "Neutral",
    description:
      "Balanced greyscale mix of grey, black, and white — a timeless floor that hides wear between cleanings.",
  },
  {
    id: "tidal-wave",
    name: "Tidal Wave",
    collection: "solids",
    image: "/images/flakes/swatches/tidal-wave.jpg",
    tone: "Cool",
    description:
      "Cool blue, grey, and white chips — distinctive coastal character with a polished finish.",
  },
  {
    id: "quicksilver",
    name: "Quicksilver",
    collection: "solids",
    image: "/images/flakes/swatches/quicksilver.jpg",
    tone: "Neutral",
    description:
      "Bright white and light grey with black specks — maximizes light reflection for smaller garages.",
  },
  {
    id: "bean-sable",
    name: "Bean / Sable",
    collection: "solids",
    image: "/images/flakes/swatches/bean-sable.jpg",
    tone: "Warm",
    description:
      "Warm tan, beige, brown, and black blend — earthy warmth for mudrooms and warm-toned homes.",
  },
  {
    id: "stonehenge",
    name: "Stonehenge",
    collection: "solids",
    image: "/images/flakes/swatches/stonehenge.jpg",
    tone: "Neutral",
    description:
      "Natural stone-grey tones with white highlights — refined, monolithic look with subtle texture.",
  },
  {
    id: "orbit",
    name: "Orbit",
    collection: "solids",
    image: "/images/flakes/swatches/orbit.jpg",
    tone: "Cool",
    description:
      "Vibrant royal and bright blue with black and white — bold personality for show-ready workshops.",
  },
  {
    id: "outback",
    name: "Outback",
    collection: "solids",
    image: "/images/flakes/swatches/outback.jpg",
    tone: "Warm",
    description:
      "Rustic tan, brown, black, and white mix — rugged warmth inspired by natural earth tones.",
  },
  {
    id: "madras",
    name: "Madras",
    collection: "solids",
    image: "/images/flakes/swatches/madras.jpg",
    tone: "Warm",
    description:
      "Muted tan, taupe, and light grey — understated sandy blend for a calm, cohesive garage aesthetic.",
  },
];

export const garageFlakeCollections: FlakeCollection[] = ["blends", "solids"];
