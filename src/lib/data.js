// Mock data for Slatch Pharmaceuticals. In a real deployment this would come
// from a CMS or database.

export const categories = [
  {
    slug: "digestive-stomach-disorders",
    name: "Digestive & Stomach Disorders",
    icon: "Stomach",
    color: "#D97706",
    image: { src: "/images/12.jpeg", width: 400, height: 200 },
    description:
      "Herbal formulations to support digestion, acidity, bloating and stomach comfort.",
    level: 1,
  },
  {
    slug: "liver-gallbladder-disorders",
    name: "Liver & Gallbladder Disorders",
    icon: "Liver",
    color: "#EA580C",
    image: { src: "/images/11.jpeg", width: 400, height: 200 },
    description: "Traditional remedies formulated to support liver and gallbladder health.",
    level: 1,
  },
  {
    slug: "kidney-urinary-disorders",
    name: "Kidney & Urinary Disorders",
    icon: "Kidney",
    color: "#2563EB",
    image: { src: "/images/10.jpeg", width: 400, height: 200 },
    description: "Herbal support for kidney function and the urinary tract.",
    level: 1,
  },
  {
    slug: "diabetes-endocrine-metabolic-disorders",
    name: "Diabetes, Endocrine & Metabolic Disorders",
    icon: "Diabetes",
    color: "#7C3AED",
    image: { src: "/images/9.jpeg", width: 400, height: 200 },
    description:
      "Formulations traditionally used to support healthy blood sugar, endocrine balance and metabolism.",
    level: 1,
  },
  {
    slug: "heart-blood-circulatory-disorders",
    name: "Heart, Blood & Circulatory Disorders",
    icon: "Heart",
    color: "#DC2626",
    image: { src: "/images/8.jpeg", width: 400, height: 200 },
    description: "Herbal support for heart, blood and circulatory wellbeing.",
    level: 1,
  },
  {
    slug: "respiratory-lung-disorders",
    name: "Respiratory & Lung Disorders",
    icon: "Lungs",
    color: "#0284C7",
    image: { src: "/images/7.jpeg", width: 400, height: 200 },
    description: "Herbal support for the respiratory system and lung health.",
    level: 1,
  },
  {
    slug: "eyes-ears-nose-throat-disorders",
    name: "Eyes, Ears, Nose & Throat Disorders",
    icon: "Throat",
    color: "#0D9488",
    image: { src: "/images/6.jpeg", width: 400, height: 200 },
    description: "Traditional support for the eyes, ears, nose and throat.",
    level: 1,
  },
  {
    slug: "brain-mental-health-sleep-disorders",
    name: "Brain, Mental Health & Sleep Disorders",
    icon: "Pain",
    color: "#4F46E5",
    image: { src: "/images/5.jpeg", width: 400, height: 200 },
    description: "Herbal support for mental calmness, focus and healthy sleep patterns.",
    level: 1,
  },
  {
    slug: "joint-bone-muscle-nerve-disorders",
    name: "Joint, Bone, Muscle & Nerve Disorders",
    icon: "Joint",
    color: "#65A30D",
    image: { src: "/images/4.jpeg", width: 400, height: 200 },
    description: "Herbal support for joints, bones, muscles and nerves.",
    level: 1,
  },
  {
    slug: "skin-hair-nails-disorders",
    name: "Skin, Hair & Nails Disorders",
    icon: "Skin",
    color: "#DB2777",
    image: { src: "/images/3.jpeg", width: 400, height: 200 },
    description: "Herbal care for skin, hair and nail health.",
    level: 1,
  },
  {
    slug: "mens-health-sexual-reproductive-disorders",
    name: "Men’s Health, Sexual & Reproductive Disorders",
    icon: "MensHealth",
    color: "#0891B2",
    image: { src: "/images/2.jpeg", width: 400, height: 200 },
    description: "Herbal formulations tailored to men’s health, sexual wellbeing and reproductive support.",
    level: 1,
  },
  {
    slug: "womens-health-hormonal-reproductive-disorders",
    name: "Women’s Health, Hormonal & Reproductive Disorders",
    icon: "WomensHealth",
    color: "#C026D3",
    image: { src: "/images/1.jpeg", width: 400, height: 200 },
    description: "Herbal support for women’s health, hormones and reproductive wellbeing.",
    level: 1,
  },
  {
    slug: "childrens-health-immunity",
    name: "Children’s Health & Immunity",
    icon: "Fertility",
    color: "#CA8A04",
    image: { src: "/images/16.jpeg", width: 400, height: 200 },
    description: "Support for children’s wellness, immunity and everyday vitality.",
    level: 1,
  },
  {
    slug: "infections-fever-seasonal-illnesses",
    name: "Infections, Fever & Seasonal Illnesses",
    icon: "Throat",
    color: "#E11D48",
    image: { src: "/images/15.jpeg", width: 400, height: 200 },
    description: "Herbal formulations traditionally used to support recovery and seasonal comfort.",
    level: 1,
  },
  {
    slug: "weight-energy-general-weakness-performance",
    name: "Weight, Energy, General Weakness & Performance",
    icon: "Diabetes",
    color: "#9333EA",
    image: { src: "/images/14.jpeg", width: 400, height: 200 },
    description: "Support for energy, stamina, weight balance and general vitality.",
    level: 1,
  },
  {
    slug: "elderly-care-chronic-conditions",
    name: "Elderly Care & Chronic Conditions",
    icon: "Heart",
    color: "#57534E",
    image: { src: "/images/13.jpeg", width: 400, height: 200 },
    description: "Traditional support for everyday wellbeing in older age and chronic care.",
    level: 1,
  },
];

export const products = [
  {
    slug: "bdk-razont-capsule",
    name: "BDK Razont Capsule",
    shortName: "BDK Razont Cap",
    qd: "QD 3068",
    category: "digestive-stomach-disorders",
    images: [
      "/images/products/qd3068/1.jpeg",
      "/images/products/qd3068/2.jpeg",
      "/images/products/qd3068/3.jpeg",
    ],
    price: 999,
    form: "Capsule",
    size: "20 Capsules",
    productCategory: "Herbal Medicine",
    description:
      "BDK Razont Capsule is a DRAP registered herbal medicine specially formulated for individuals experiencing piles (hemorrhoids) related pain, discomfort and irritation. It contains a combination of traditionally used herbal ingredients designed to provide supportive relief from piles-related symptoms and help improve daily comfort.",
    indication: "For the relief of piles (hemorrhoids) pain and associated discomfort.",
    highlights: [
      "Specially formulated for piles-related pain and discomfort",
      "Helps relieve piles-associated irritation and discomfort",
      "Supports comfort during hemorrhoidal symptoms",
      "Herbal formulation prepared with traditionally used ingredients",
      "Convenient capsule dosage form for regular use",
    ],
    usage: "Take 1 capsule in the morning and 1 capsule at night after meals, or as directed by your physician.",
    ingredients:
      "Azadirachta indica (Neem) 15 mg, Raphanus sativus (Radish) 55 mg, Aegle marmelos (Bael) 200 mg, Berberis aristata (Daruharidra) 200 mg, Terminalia chebula (Haritaki) 80 mg.",
    regulatory: {
      authority: "Drug Regulatory Authority of Pakistan (DRAP)",
      enlistmentNo: "01519",
      form7No: "015191430244",
    },
    manufacturedBy: "BDK Laboratories",
    marketedBy: "Slatch Pharmaceuticals, Sialkot",
    storage: "Store in a cool and dry place, away from direct sunlight. Keep out of reach of children.",
    importantNote:
      "Use this medicine according to the recommended dosage or advice of a qualified healthcare professional. If symptoms persist or worsen, consult your physician.",
    tagline: {
      title: "BDK Razont Capsule Herbal Support for Piles Pain Relief",
      text: "Specially formulated to help relieve piles-related pain and discomfort and support better daily comfort.",
    },
  },
];

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug) {
  return products.filter((p) => p.category === slug);
}

export function searchAll(query) {
  const q = query.trim().toLowerCase();
  if (!q) return { products: [], categories: [] };
  return {
    products: products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.qd.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q)
    ),
    categories: categories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    ),
  };
}

export function formatPKR(amount) {
  return `Rs. ${amount.toLocaleString("en-PK")}`;
}
