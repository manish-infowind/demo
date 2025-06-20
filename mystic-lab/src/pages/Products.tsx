import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Heart,
  Shield,
  Microscope,
  Pill,
  Stethoscope,
  Search,
  Star,
  ShoppingCart,
  Filter,
} from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const products = [
    {
      id: 1,
      name: "CardioMax Pro",
      category: "Cardiovascular",
      description:
        "Advanced cardiovascular support formula with proven clinical results for heart health optimization.",
      price: 89.99,
      rating: 4.8,
      reviews: 245,
      image:
        "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["FDA Approved", "Clinically Tested", "Natural Formula"],
      icon: Heart,
      inStock: true,
    },
    {
      id: 2,
      name: "ImmunoShield Plus",
      category: "Immunity",
      description:
        "Comprehensive immune system support with advanced antioxidants and essential vitamins.",
      price: 64.99,
      rating: 4.9,
      reviews: 312,
      image:
        "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Vitamin Enhanced", "Rapid Absorption", "24h Protection"],
      icon: Shield,
      inStock: true,
    },
    {
      id: 3,
      name: "NeuroFocus Elite",
      category: "Cognitive Health",
      description:
        "Premium cognitive enhancement formula designed to improve focus, memory, and mental clarity.",
      price: 79.99,
      rating: 4.7,
      reviews: 189,
      image:
        "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Brain Health", "Memory Support", "Focus Enhancement"],
      icon: Microscope,
      inStock: true,
    },
    {
      id: 4,
      name: "DigestWell Pro",
      category: "Digestive Health",
      description:
        "Advanced digestive support with probiotics and enzymes for optimal gut health and comfort.",
      price: 54.99,
      rating: 4.6,
      reviews: 156,
      image:
        "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Probiotic Blend", "Enzyme Complex", "Gut Health"],
      icon: Pill,
      inStock: false,
    },
    {
      id: 5,
      name: "VitalityMax",
      category: "Energy & Wellness",
      description:
        "Complete wellness formula providing sustained energy and overall health support for active lifestyles.",
      price: 69.99,
      rating: 4.8,
      reviews: 298,
      image:
        "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Energy Boost", "Wellness Support", "Active Lifestyle"],
      icon: Stethoscope,
      inStock: true,
    },
    {
      id: 6,
      name: "JointFlex Advanced",
      category: "Joint Health",
      description:
        "Revolutionary joint support formula with glucosamine, chondroitin, and anti-inflammatory compounds.",
      price: 74.99,
      rating: 4.7,
      reviews: 203,
      image:
        "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Joint Support", "Mobility Enhancement", "Pain Relief"],
      icon: Shield,
      inStock: true,
    },
    {
      id: 7,
      name: "SleepWell Natural",
      category: "Sleep & Recovery",
      description:
        "Natural sleep support formula with melatonin, valerian root, and calming herbs for restful sleep.",
      price: 49.99,
      rating: 4.5,
      reviews: 178,
      image:
        "https://images.pexels.com/photos/3873145/pexels-photo-3873145.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Natural Ingredients", "Non-Habit Forming", "Deep Sleep"],
      icon: Pill,
      inStock: true,
    },
    {
      id: 8,
      name: "MetaboLift Pro",
      category: "Weight Management",
      description:
        "Advanced metabolism support formula designed to help maintain healthy weight and energy levels.",
      price: 84.99,
      rating: 4.6,
      reviews: 134,
      image:
        "https://images.pexels.com/photos/3873140/pexels-photo-3873140.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Metabolism Support", "Energy Boost", "Natural Formula"],
      icon: Heart,
      inStock: true,
    },
  ];

  const categories = [
    "all",
    "Cardiovascular",
    "Immunity",
    "Cognitive Health",
    "Digestive Health",
    "Energy & Wellness",
    "Joint Health",
    "Sleep & Recovery",
    "Weight Management",
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medoscopic-blue-600 to-medoscopic-teal-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover our comprehensive range of pharmaceutical products designed
            to support your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">
                    Price (High to Low)
                  </SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProducts.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-900"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={product.inStock ? "default" : "destructive"}
                        className={
                          product.inStock
                            ? "bg-medoscopic-green-600"
                            : "bg-red-600"
                        }
                      >
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg">
                        <IconComponent className="h-4 w-4 text-medoscopic-teal-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="outline"
                        className="text-xs border-medoscopic-blue-200 text-medoscopic-blue-700 dark:border-medoscopic-blue-800 dark:text-medoscopic-blue-300"
                      >
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {product.rating}
                        </span>
                        <span className="text-xs text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-medoscopic-teal-200 text-medoscopic-teal-700 dark:border-medoscopic-teal-800 dark:text-medoscopic-teal-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-medoscopic-blue-600">
                        ${product.price}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
                      >
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        disabled={!product.inStock}
                        className="bg-medoscopic-teal-600 hover:bg-medoscopic-teal-700 text-white"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
