import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Shield,
  Microscope,
  Pill,
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "CardioMax Pro",
      category: "Cardiovascular",
      description:
        "Advanced cardiovascular support formula with proven clinical results for heart health optimization.",
      price: "$89.99",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/3873209/pexels-photo-3873209.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["FDA Approved", "Clinically Tested", "Natural Formula"],
      icon: Heart,
    },
    {
      id: 2,
      name: "ImmunoShield Plus",
      category: "Immunity",
      description:
        "Comprehensive immune system support with advanced antioxidants and essential vitamins.",
      price: "$64.99",
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Vitamin Enhanced", "Rapid Absorption", "24h Protection"],
      icon: Shield,
    },
    {
      id: 3,
      name: "NeuroFocus Elite",
      category: "Cognitive Health",
      description:
        "Premium cognitive enhancement formula designed to improve focus, memory, and mental clarity.",
      price: "$79.99",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/3873173/pexels-photo-3873173.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Brain Health", "Memory Support", "Focus Enhancement"],
      icon: Microscope,
    },
    {
      id: 4,
      name: "DigestWell Pro",
      category: "Digestive Health",
      description:
        "Advanced digestive support with probiotics and enzymes for optimal gut health and comfort.",
      price: "$54.99",
      rating: 4.6,
      image:
        "https://images.pexels.com/photos/3873166/pexels-photo-3873166.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Probiotic Blend", "Enzyme Complex", "Gut Health"],
      icon: Pill,
    },
    {
      id: 5,
      name: "VitalityMax",
      category: "Energy & Wellness",
      description:
        "Complete wellness formula providing sustained energy and overall health support for active lifestyles.",
      price: "$69.99",
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/3873152/pexels-photo-3873152.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Energy Boost", "Wellness Support", "Active Lifestyle"],
      icon: Stethoscope,
    },
    {
      id: 6,
      name: "JointFlex Advanced",
      category: "Joint Health",
      description:
        "Revolutionary joint support formula with glucosamine, chondroitin, and anti-inflammatory compounds.",
      price: "$74.99",
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/3873148/pexels-photo-3873148.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Joint Support", "Mobility Enhancement", "Pain Relief"],
      icon: Shield,
    },
  ];

  const stats = [
    { label: "Happy Customers", value: "50,000+", icon: Users },
    { label: "Years of Experience", value: "15+", icon: Award },
    { label: "Products Tested", value: "100+", icon: CheckCircle },
    { label: "Customer Rating", value: "4.8/5", icon: Star },
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
<section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-medoscopic-blue-600/10 to-medoscopic-teal-600/10" />
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="text-center">
      <div className="mb-8">
        <img
          src="/logo.png"
          alt="Medoscopic Pharma Logo"
          className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto mx-auto mb-6" // Increased sizes
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
        Advanced Healthcare
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-medoscopic-blue-600 to-medoscopic-teal-600">
          Solutions
        </span>
      </h1>
      {/* Rest of your hero section remains the same */}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-medoscopic-blue-100 to-medoscopic-teal-100 dark:from-medoscopic-blue-900/20 dark:to-medoscopic-teal-900/20 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-medoscopic-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our premium collection of pharmaceutical products, each
              designed with cutting-edge research and rigorous testing
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
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
                        variant="secondary"
                        className="bg-white/90 text-medoscopic-blue-600"
                      >
                        {product.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-medoscopic-teal-600" />
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-medoscopic-teal-200 text-medoscopic-teal-700 dark:border-medoscopic-teal-800 dark:text-medoscopic-teal-300"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-medoscopic-blue-600">
                        {product.price}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
                        asChild
                      >
                        <Link to={`/products/${product.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
              asChild
            >
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-medoscopic-blue-600 to-medoscopic-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust Medoscopic Pharma
            for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-medoscopic-blue-600 hover:bg-gray-100"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-medoscopic-blue-600"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
