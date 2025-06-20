import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
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
  Home,
  Search,
  ShoppingBag,
  Phone,
  Microscope,
  HeartPulse,
  Pill,
  AlertCircle,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 1000);
  };

  const quickActions = [
    {
      icon: Home,
      label: "Go Home",
      description: "Return to our homepage",
      action: () => navigate("/"),
      variant: "default" as const,
    },
    {
      icon: ShoppingBag,
      label: "View Products",
      description: "Browse our pharmaceutical products",
      action: () => navigate("/products"),
      variant: "outline" as const,
    },
    {
      icon: Phone,
      label: "Contact Support",
      description: "Get help from our team",
      action: () => navigate("/contact"),
      variant: "outline" as const,
    },
    {
      icon: Search,
      label: "Search",
      description: "Find what you're looking for",
      action: () => navigate("/products"),
      variant: "outline" as const,
    },
  ];

  const suggestions = [
    {
      title: "CardioMax Pro",
      category: "Cardiovascular Health",
      icon: HeartPulse,
      path: "/products/1",
    },
    {
      title: "ImmunoShield Plus",
      category: "Immunity Support",
      icon: Microscope,
      path: "/products/2",
    },
    {
      title: "NeuroFocus Elite",
      category: "Cognitive Health",
      icon: Pill,
      path: "/products/3",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main 404 Content */}
        <div className="text-center mb-16">
          {/* Large 404 with Medical Theme */}
          <div className="relative mb-8">
            <div className="text-8xl md:text-9xl font-bold text-medoscopic-blue-600/20 dark:text-medoscopic-blue-400/20 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-800 rounded-full p-6 shadow-xl border-4 border-medoscopic-blue-600/20">
                <AlertCircle className="h-16 w-16 text-medoscopic-blue-600" />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
              The page you're looking for seems to have gone missing from our
              medical records.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Don't worry, our medical team is here to help you find what you
              need.
            </p>
          </div>

          {/* Current Path Info */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <span className="text-sm text-red-800 dark:text-red-200">
                Requested path:{" "}
                <code className="bg-red-100 dark:bg-red-800 px-2 py-1 rounded text-xs">
                  {location.pathname}
                </code>
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-medoscopic-blue-200 dark:border-medoscopic-blue-800"
                  onClick={action.action}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="bg-medoscopic-blue-100 dark:bg-medoscopic-blue-900 rounded-full w-12 h-12 flex items-center justify-center mx-auto group-hover:bg-medoscopic-blue-600 group-hover:text-white transition-colors">
                        <IconComponent className="h-6 w-6 text-medoscopic-blue-600 group-hover:text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {action.label}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-16">
            <Button
              onClick={() => navigate(-1)}
              variant="outline"
              className="border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button
              onClick={handleRefresh}
              disabled={isLoading}
              variant="outline"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-2" />
                  Refreshing...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Refresh Page
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Featured Products Suggestions */}
        <Card className="mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-medoscopic-blue-600">
              While You're Here, Check Out Our Popular Products
            </CardTitle>
            <CardDescription className="text-lg">
              Discover our most trusted pharmaceutical solutions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestions.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => navigate(product.path)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-medoscopic-teal-100 dark:bg-medoscopic-teal-900 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <IconComponent className="h-5 w-5 text-medoscopic-teal-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-medoscopic-blue-600 transition-colors">
                            {product.title}
                          </h3>
                          <Badge
                            variant="outline"
                            className="text-xs border-medoscopic-teal-200 text-medoscopic-teal-700 dark:border-medoscopic-teal-800 dark:text-medoscopic-teal-300"
                          >
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
                      >
                        View Product
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Support Information */}
        <Card className="bg-gradient-to-r from-medoscopic-blue-50 to-medoscopic-teal-50 dark:from-medoscopic-blue-900/20 dark:to-medoscopic-teal-900/20 border-medoscopic-blue-200 dark:border-medoscopic-blue-800">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-medoscopic-blue-600 rounded-full w-12 h-12 flex items-center justify-center">
                <Phone className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-medoscopic-blue-900 dark:text-medoscopic-blue-100 mb-2">
              Need Immediate Assistance?
            </h3>
            <p className="text-medoscopic-blue-700 dark:text-medoscopic-blue-200 mb-4">
              Our medical information team is available to help you find what
              you're looking for.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-medoscopic-blue-600 mr-2" />
                <span className="text-medoscopic-blue-800 dark:text-medoscopic-blue-100 font-medium">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-medoscopic-blue-600 mr-2">✉</span>
                <span className="text-medoscopic-blue-800 dark:text-medoscopic-blue-100 font-medium">
                  support@medoscopic.com
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
