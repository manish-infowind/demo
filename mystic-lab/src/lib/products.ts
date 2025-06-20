import {
  Heart,
  Shield,
  Microscope,
  Pill,
  Stethoscope,
  Zap,
  Moon,
} from "lucide-react";

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  features: string[];
  specifications: {
    dosage: string;
    activeIngredient: string;
    packaging: string;
    storage: string;
    manufacturer: string;
    expiryDate: string;
  };
  icon: any;
  inStock: boolean;
  sideEffects: string[];
  contraindications: string[];
  directions: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "CardioMax Pro",
    category: "Cardiovascular",
    description:
      "Advanced cardiovascular support formula with proven clinical results for heart health optimization.",
    longDescription:
      "CardioMax Pro is a scientifically formulated cardiovascular support supplement designed to promote optimal heart health and circulation. This advanced formula combines clinically proven ingredients including CoQ10, Omega-3 fatty acids, and Hawthorn extract to support healthy blood pressure, improve circulation, and enhance overall cardiovascular function. Developed by leading cardiologists and backed by extensive research, CardioMax Pro represents the pinnacle of heart health supplementation.",
    price: 89.99,
    rating: 4.8,
    reviews: 245,
    image:
      "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["FDA Approved", "Clinically Tested", "Natural Formula"],
    specifications: {
      dosage: "2 capsules daily with meals",
      activeIngredient: "CoQ10 100mg, Omega-3 500mg",
      packaging: "60 capsules per bottle",
      storage: "Store in cool, dry place",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "24 months from manufacture",
    },
    icon: Heart,
    inStock: true,
    sideEffects: ["Mild stomach upset", "Headache (rare)"],
    contraindications: ["Pregnancy", "Blood thinning medications"],
    directions: [
      "Take 2 capsules daily with meals",
      "Do not exceed recommended dosage",
      "Consult physician before use if pregnant or nursing",
    ],
  },
  {
    id: 2,
    name: "ImmunoShield Plus",
    category: "Immunity",
    description:
      "Comprehensive immune system support with advanced antioxidants and essential vitamins.",
    longDescription:
      "ImmunoShield Plus is a comprehensive immune system support formula that combines the power of essential vitamins, minerals, and antioxidants to strengthen your body's natural defenses. This advanced formula features high-potency Vitamin C, Zinc, Elderberry extract, and proprietary immune-boosting compounds that work synergistically to enhance immune function, reduce inflammation, and support overall wellness. Perfect for daily immune maintenance or during times of increased immune challenges.",
    price: 64.99,
    rating: 4.9,
    reviews: 312,
    image:
      "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Vitamin Enhanced", "Rapid Absorption", "24h Protection"],
    specifications: {
      dosage: "1 capsule daily",
      activeIngredient: "Vitamin C 1000mg, Zinc 15mg, Elderberry 300mg",
      packaging: "30 capsules per bottle",
      storage: "Store below 25°C",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "36 months from manufacture",
    },
    icon: Shield,
    inStock: true,
    sideEffects: ["Mild nausea if taken on empty stomach"],
    contraindications: ["Autoimmune disorders", "Immunosuppressive therapy"],
    directions: [
      "Take 1 capsule daily with breakfast",
      "Best taken with food",
      "Maintain consistent daily use for best results",
    ],
  },
  {
    id: 3,
    name: "NeuroFocus Elite",
    category: "Cognitive Health",
    description:
      "Premium cognitive enhancement formula designed to improve focus, memory, and mental clarity.",
    longDescription:
      "NeuroFocus Elite is a cutting-edge nootropic supplement designed to optimize cognitive performance and brain health. This premium formula combines scientifically validated ingredients including Bacopa Monnieri, Lion's Mane Mushroom, Phosphatidylserine, and Ginkgo Biloba to enhance memory, improve focus, boost mental clarity, and support long-term brain health. Ideal for students, professionals, and anyone looking to maintain peak mental performance.",
    price: 79.99,
    rating: 4.7,
    reviews: 189,
    image:
      "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Brain Health", "Memory Support", "Focus Enhancement"],
    specifications: {
      dosage: "2 capsules in the morning",
      activeIngredient: "Bacopa Monnieri 300mg, Lion's Mane 250mg",
      packaging: "60 capsules per bottle",
      storage: "Store in dry place away from sunlight",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "24 months from manufacture",
    },
    icon: Microscope,
    inStock: true,
    sideEffects: ["Mild drowsiness initially", "Vivid dreams"],
    contraindications: ["Pregnancy", "Severe mental illness"],
    directions: [
      "Take 2 capsules in the morning with water",
      "Take consistently for 4-6 weeks for optimal benefits",
      "Do not take with alcohol",
    ],
  },
  {
    id: 4,
    name: "DigestWell Pro",
    category: "Digestive Health",
    description:
      "Advanced digestive support with probiotics and enzymes for optimal gut health and comfort.",
    longDescription:
      "DigestWell Pro is a comprehensive digestive health formula that combines powerful probiotics, digestive enzymes, and prebiotic fibers to optimize gut health and improve digestion. This advanced formula features 50 billion CFU of beneficial bacteria from 12 different strains, plus essential digestive enzymes to break down proteins, fats, and carbohydrates. Perfect for those experiencing digestive discomfort, bloating, or seeking to maintain optimal gut health.",
    price: 54.99,
    rating: 4.6,
    reviews: 156,
    image:
      "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873140/pexels-photo-3873140.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Probiotic Blend", "Enzyme Complex", "Gut Health"],
    specifications: {
      dosage: "1 capsule with meals",
      activeIngredient: "Probiotics 50B CFU, Digestive Enzymes 200mg",
      packaging: "90 capsules per bottle",
      storage: "Refrigerate after opening",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "18 months from manufacture",
    },
    icon: Pill,
    inStock: false,
    sideEffects: ["Initial bloating", "Changes in bowel movements"],
    contraindications: ["Severe immune deficiency", "Recent surgery"],
    directions: [
      "Take 1 capsule with each meal",
      "Start with 1 capsule daily and gradually increase",
      "Refrigerate after opening",
    ],
  },
  {
    id: 5,
    name: "VitalityMax",
    category: "Energy & Wellness",
    description:
      "Complete wellness formula providing sustained energy and overall health support for active lifestyles.",
    longDescription:
      "VitalityMax is a comprehensive wellness formula designed to boost energy levels, enhance physical performance, and support overall health. This powerful blend combines B-vitamins, adaptogens like Rhodiola and Ashwagandha, plus essential minerals to combat fatigue, reduce stress, and promote sustained energy throughout the day. Perfect for busy professionals, athletes, and anyone seeking to optimize their daily energy and wellness.",
    price: 69.99,
    rating: 4.8,
    reviews: 298,
    image:
      "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Energy Boost", "Wellness Support", "Active Lifestyle"],
    specifications: {
      dosage: "2 capsules in the morning",
      activeIngredient: "B-Complex, Rhodiola 300mg, Ashwagandha 250mg",
      packaging: "60 capsules per bottle",
      storage: "Store in cool, dry place",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "24 months from manufacture",
    },
    icon: Zap,
    inStock: true,
    sideEffects: ["Mild jitters initially", "Increased alertness"],
    contraindications: ["Insomnia", "High blood pressure"],
    directions: [
      "Take 2 capsules in the morning",
      "Do not take within 6 hours of bedtime",
      "Take with food to minimize stomach upset",
    ],
  },
  {
    id: 6,
    name: "JointFlex Advanced",
    category: "Joint Health",
    description:
      "Revolutionary joint support formula with glucosamine, chondroitin, and anti-inflammatory compounds.",
    longDescription:
      "JointFlex Advanced is a comprehensive joint health formula that combines clinically proven ingredients to support joint mobility, reduce inflammation, and promote cartilage health. This advanced formula features high-potency glucosamine sulfate, chondroitin sulfate, MSM, and turmeric extract to provide comprehensive joint support. Ideal for active individuals, seniors, or anyone experiencing joint discomfort.",
    price: 74.99,
    rating: 4.7,
    reviews: 203,
    image:
      "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Joint Support", "Mobility Enhancement", "Pain Relief"],
    specifications: {
      dosage: "3 capsules daily with meals",
      activeIngredient: "Glucosamine 1500mg, Chondroitin 1200mg, MSM 1000mg",
      packaging: "90 capsules per bottle",
      storage: "Store at room temperature",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "36 months from manufacture",
    },
    icon: Shield,
    inStock: true,
    sideEffects: ["Mild stomach upset", "Drowsiness (rare)"],
    contraindications: ["Shellfish allergy", "Blood clotting disorders"],
    directions: [
      "Take 3 capsules daily with meals",
      "Take consistently for 6-8 weeks for best results",
      "Consult doctor if you have shellfish allergies",
    ],
  },
  {
    id: 7,
    name: "SleepWell Natural",
    category: "Sleep & Recovery",
    description:
      "Natural sleep support formula with melatonin, valerian root, and calming herbs for restful sleep.",
    longDescription:
      "SleepWell Natural is a gentle, non-habit forming sleep aid that combines natural ingredients to promote restful sleep and healthy sleep patterns. This carefully crafted formula features melatonin, valerian root, chamomile, and L-theanine to help you fall asleep faster, stay asleep longer, and wake up refreshed. Perfect for those dealing with occasional sleeplessness, jet lag, or stress-related sleep issues.",
    price: 49.99,
    rating: 4.5,
    reviews: 178,
    image:
      "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873140/pexels-photo-3873140.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Natural Ingredients", "Non-Habit Forming", "Deep Sleep"],
    specifications: {
      dosage: "1-2 capsules 30 minutes before bedtime",
      activeIngredient: "Melatonin 3mg, Valerian Root 300mg, L-Theanine 200mg",
      packaging: "60 capsules per bottle",
      storage: "Store in dark, cool place",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "24 months from manufacture",
    },
    icon: Moon,
    inStock: true,
    sideEffects: ["Morning drowsiness", "Vivid dreams"],
    contraindications: ["Pregnancy", "Antidepressant medications"],
    directions: [
      "Take 1-2 capsules 30 minutes before bedtime",
      "Start with 1 capsule to assess tolerance",
      "Do not drive or operate machinery after taking",
    ],
  },
  {
    id: 8,
    name: "MetaboLift Pro",
    category: "Weight Management",
    description:
      "Advanced metabolism support formula designed to help maintain healthy weight and energy levels.",
    longDescription:
      "MetaboLift Pro is a scientifically formulated metabolism support supplement designed to help maintain healthy weight management goals. This advanced formula combines green tea extract, garcinia cambogia, chromium, and other metabolism-supporting ingredients to help boost metabolic rate, support healthy blood sugar levels, and promote energy production. Ideal for those seeking natural support for their weight management journey.",
    price: 84.99,
    rating: 4.6,
    reviews: 134,
    image:
      "https://images.pexels.com/photos/3873140/pexels-photo-3873140.jpeg?auto=compress&cs=tinysrgb&w=400",
    gallery: [
      "https://images.pexels.com/photos/3873140/pexels-photo-3873140.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Metabolism Support", "Energy Boost", "Natural Formula"],
    specifications: {
      dosage: "2 capsules 30 minutes before meals",
      activeIngredient: "Green Tea Extract 400mg, Garcinia Cambogia 500mg",
      packaging: "120 capsules per bottle",
      storage: "Store at room temperature",
      manufacturer: "Medoscopic Pharma",
      expiryDate: "24 months from manufacture",
    },
    icon: Heart,
    inStock: true,
    sideEffects: ["Increased heart rate", "Mild anxiety"],
    contraindications: ["Heart conditions", "Pregnancy"],
    directions: [
      "Take 2 capsules 30 minutes before main meals",
      "Do not exceed 4 capsules per day",
      "Maintain a healthy diet and exercise routine",
    ],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getRelatedProducts = (
  currentProductId: number,
  category?: string,
  limit = 4,
): Product[] => {
  let related = products.filter((product) => product.id !== currentProductId);

  if (category) {
    const sameCategory = related.filter(
      (product) => product.category === category,
    );
    const otherCategory = related.filter(
      (product) => product.category !== category,
    );

    // Prioritize same category, then add others if needed
    related = [...sameCategory, ...otherCategory];
  }

  return related.slice(0, limit);
};
