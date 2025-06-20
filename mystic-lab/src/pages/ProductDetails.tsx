import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Package,
  Truck,
  Shield,
  Clock,
} from "lucide-react";
import { getProductById, getRelatedProducts } from "@/lib/products";
import ProductCarousel from "@/components/ProductCarousel";
import { toast } from "sonner";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const productId = parseInt(id || "0");
  const product = getProductById(productId);
  const relatedProducts = getRelatedProducts(productId, product?.category);

  useEffect(() => {
    if (!product) {
      navigate("/products");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const IconComponent = product.icon;

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart!`);
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(
      isFavorited ? "Removed from favorites" : "Added to favorites",
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Product link copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate("/products")}
            className="flex items-center text-medoscopic-blue-600 hover:text-medoscopic-blue-700 mb-2 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>
          <nav className="text-sm text-gray-500">
            <span>Products</span> <span className="mx-2">/</span>
            <span>{product.category}</span> <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white dark:bg-gray-800">
              <img
                src={product.gallery[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <div className="bg-white/90 dark:bg-gray-900/90 p-2 rounded-lg">
                  <IconComponent className="h-6 w-6 text-medoscopic-teal-600" />
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <Badge
                  variant={product.inStock ? "default" : "destructive"}
                  className={
                    product.inStock ? "bg-medoscopic-green-600" : "bg-red-600"
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                    selectedImage === index
                      ? "border-medoscopic-blue-600"
                      : "border-gray-200 dark:border-gray-700 hover:border-medoscopic-blue-400"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-medoscopic-blue-200 text-medoscopic-blue-700 dark:border-medoscopic-blue-800 dark:text-medoscopic-blue-300"
              >
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {product.description}
              </p>
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="font-medium text-gray-900 dark:text-white ml-2">
                  {product.rating}
                </span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600 dark:text-gray-300">
                {product.reviews} reviews
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-medoscopic-blue-600">
                ${product.price}
              </span>
              <Badge
                variant="outline"
                className="text-medoscopic-green-600 border-medoscopic-green-600"
              >
                Free Shipping
              </Badge>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="border-medoscopic-teal-200 text-medoscopic-teal-700 dark:border-medoscopic-teal-800 dark:text-medoscopic-teal-300"
                >
                  <CheckCircle className="h-3 w-3 mr-1" />
                  {feature}
                </Badge>
              ))}
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-medoscopic-blue-600 hover:bg-medoscopic-blue-700 text-white"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  onClick={handleFavorite}
                  className={`border-medoscopic-teal-600 ${
                    isFavorited
                      ? "bg-medoscopic-teal-600 text-white"
                      : "text-medoscopic-teal-600 hover:bg-medoscopic-teal-600 hover:text-white"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 ${isFavorited ? "fill-current" : ""}`}
                  />
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Truck className="h-4 w-4 text-medoscopic-blue-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Shield className="h-4 w-4 text-medoscopic-blue-600" />
                <span>FDA approved & clinically tested</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Package className="h-4 w-4 text-medoscopic-blue-600" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4 text-medoscopic-blue-600" />
                <span>Ships within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="directions">Directions</TabsTrigger>
              <TabsTrigger value="safety">Safety Info</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {product.longDescription}
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>
                    Detailed technical information about this product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="border-b border-gray-200 dark:border-gray-700 pb-2"
                        >
                          <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </dt>
                          <dd className="text-gray-900 dark:text-white mt-1">
                            {value}
                          </dd>
                        </div>
                      ),
                    )}
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="directions" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Directions for Use</CardTitle>
                  <CardDescription>
                    How to properly use this product for best results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {product.directions.map((direction, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-medoscopic-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {direction}
                        </span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="safety" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-600 dark:text-yellow-400">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Side Effects
                    </CardTitle>
                    <CardDescription>
                      Possible side effects that may occur
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.sideEffects.map((effect, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {effect}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Contraindications
                    </CardTitle>
                    <CardDescription>
                      When you should not use this product
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.contraindications.map(
                        (contraindication, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">
                              {contraindication}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                You Might Also Like
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover more products from our {product.category} collection
                and other health solutions that complement your wellness
                journey.
              </p>
            </div>
            <ProductCarousel products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
