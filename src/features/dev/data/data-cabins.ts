import { supabaseUrl } from "../../../services/supabase";
import type { Cabin } from "../../../utils/types";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins: Cabin[] = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The plush king-size bed and the bunk bed ensure a comfortable sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 0,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Experience luxury family living in the larger wooden cabin 004. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and a bunk bed. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 600,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Enjoy a gorgeous wooden cabin in the heart of the forest. Perfect for families and groups of up to 6 people. Inside, you will find beautiful high-quality interiors, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Step into a serene sanctuary in the heart of nature. This beautiful wooden cabin is perfect for families and groups of up to 6 people. Inside, you will find beautiful high-quality interiors, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 1000,
    discount: 0,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Escape into the heart of nature in this beautiful luxury cabin. Perfect for families and groups of up to 8 people. Inside, you will find beautiful high-quality interiors, a comfortable living area, multiple fireplaces, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Step into a luxurious haven in the heart of the forest. Perfect for families and groups of up to 10 people. Inside, you will find beautiful high-quality interiors, comfortable living areas, multiple fireplaces, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "009",
    maxCapacity: 12,
    regularPrice: 2000,
    discount: 0,
    image: imageUrl + "cabin-009.jpg",
    description:
      "Step into a majestic retreat in the heart of the forest. This luxurious wooden cabin is perfect for large families and groups of up to 12 people. Inside, you will find beautiful high-quality interiors, comfortable living areas, multiple fireplaces, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "010",
    maxCapacity: 16,
    regularPrice: 3000,
    discount: 0,
    image: imageUrl + "cabin-010.jpg",
    description:
      "Experience the ultimate luxury escape in this grand wooden cabin. Perfect for large groups of up to 16 people. Inside, you will find beautiful high-quality interiors, comfortable living areas, multiple fireplaces, and a fully-equipped kitchen. The bedrooms feature king-size beds. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
];
