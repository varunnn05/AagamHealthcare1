import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductById, getBrandById, getCategoryById, products } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import ProductCard from '@/components/products/ProductCard';
import {
  ShoppingCart,
  Minus,
  Plus,
  Package,
  Truck,
  Shield,
  ArrowLeft,
  AlertCircle,
} from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addItem, getItemQuantity } = useCart();

  const product = id ? getProductById(id) : undefined;
  const brand = product ? getBrandById(product.brandId) : undefined;
  const category = product ? getCategoryById(product.categoryId) : undefined;

  const [quantity, setQuantity] = useState(product?.moq || 1);

  if (!product) {
    return (
      <MainLayout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </MainLayout>
    );
  }

  const priceWithGst = product.price + (product.price * product.gstPercentage) / 100;
  const totalPrice = priceWithGst * quantity;
  const cartQuantity = getItemQuantity(product.id);

  const relatedProducts = products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    addItem(product, quantity);
  };

  const handleQuantityChange = (value: number) => {
    if (value >= product.moq && value <= product.stock) {
      setQuantity(value);
    }
  };

  return (
    <MainLayout>
      <div className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate('/products')} className="hover:text-primary">
            Products
          </button>
          <span>/</span>
          {category && (
            <>
              <button
                onClick={() => navigate(`/products?category=${category.id}`)}
                className="hover:text-primary"
              >
                {category.name}
              </button>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <button
                  key={i}
                  className="w-20 h-20 rounded-lg bg-muted overflow-hidden border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img
                    src={product.image}
                    alt={`${product.name} ${i}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {brand && <Badge variant="secondary">{brand.name}</Badge>}
                {product.stock < 50 && (
                  <Badge variant="destructive">Low Stock</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>
              <p className="text-sm text-muted-foreground mt-1">SKU: {product.sku}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-muted-foreground">per {product.unit}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span>+{product.gstPercentage}% GST</span>
                <span className="mx-2">•</span>
                <span>₹{priceWithGst.toFixed(2)} incl. GST</span>
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Stock & MOQ Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Package className="h-4 w-4 text-primary" />
                <span>In Stock: {product.stock} {product.unit}s</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4 text-primary" />
                <span>Min Order: {product.moq} {product.unit}(s)</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= product.moq}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={e => handleQuantityChange(parseInt(e.target.value) || product.moq)}
                    className="w-20 text-center border-0"
                    min={product.moq}
                    max={product.stock}
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Total: ₹{totalPrice.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {isAuthenticated
                  ? cartQuantity > 0
                    ? `Add More (${cartQuantity} in cart)`
                    : 'Add to Cart'
                  : 'Login to Order'}
              </Button>
              {!isAuthenticated && (
                <p className="text-sm text-center text-muted-foreground">
                  Please login to place an order
                </p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-sm">
                <Truck className="h-5 w-5 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{product.description}</p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>• High-quality material for accurate results</li>
                    <li>• Manufactured under strict quality control</li>
                    <li>• Suitable for professional laboratory use</li>
                    <li>• Compliant with international standards</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <Card>
                <CardContent className="pt-6">
                  <dl className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">SKU</dt>
                      <dd className="font-medium">{product.sku}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Brand</dt>
                      <dd className="font-medium">{brand?.name}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium">{category?.name}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">Unit</dt>
                      <dd className="font-medium">{product.unit}</dd>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <dt className="text-muted-foreground">GST</dt>
                      <dd className="font-medium">{product.gstPercentage}%</dd>
                    </div>
                    <div className="flex justify-between py-2">
                      <dt className="text-muted-foreground">Min Order Qty</dt>
                      <dd className="font-medium">{product.moq}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Delivery Information</h4>
                    <p className="text-muted-foreground">
                      Standard delivery within 3-5 business days across India. 
                      Express delivery available for select locations.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Wholesale Orders</h4>
                    <p className="text-muted-foreground">
                      All orders are request-based. Once your order is approved by our team, 
                      you'll receive payment instructions and delivery timeline.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
