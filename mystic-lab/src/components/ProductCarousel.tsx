import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const navigate = useNavigate();

  const handleViewProduct = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-gray-900 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => handleViewProduct(product.id)}
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
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleViewProduct(product.id)}
                        variant="secondary"
                        size="sm"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
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
                      </div>
                    </div>
                    <CardTitle
                      className="text-lg font-semibold text-gray-900 dark:text-white leading-tight cursor-pointer hover:text-medoscopic-blue-600 transition-colors"
                      onClick={() => handleViewProduct(product.id)}
                    >
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
                      <div className="flex items-center text-xs text-gray-500">
                        <span>({product.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white"
                        onClick={() => handleViewProduct(product.id)}
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
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-4 bg-white dark:bg-gray-800 border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white" />
          <CarouselNext className="right-4 bg-white dark:bg-gray-800 border-medoscopic-blue-600 text-medoscopic-blue-600 hover:bg-medoscopic-blue-600 hover:text-white" />
        </div>
      </Carousel>

      {/* Mobile Navigation Dots */}
      <div className="flex justify-center mt-6 md:hidden">
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(products.length / 1) }).map(
            (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600"
              />
            ),
          )}
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center mt-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="hidden md:inline">
            Use arrow keys or click the arrows to navigate
          </span>
          <span className="md:hidden">Swipe to see more products</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCarousel;
