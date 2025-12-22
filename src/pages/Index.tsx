import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/products/ProductCard';
import { products, brands, categories } from '@/data/mockData';
import heroImage from '@/assets/hero-medical.jpg';
import {
  FlaskConical,
  Truck,
  Shield,
  HeadphonesIcon,
  ArrowRight,
  Package,
  Users,
  Award,
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  const features = [
    {
      icon: FlaskConical,
      title: 'Quality Products',
      description: 'Premium laboratory supplies from trusted brands',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping across India',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Safe transactions with multiple payment options',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Dedicated support for all your queries',
    },
  ];

  const stats = [
    { icon: Package, value: '500+', label: 'Products' },
    { icon: Users, value: '1000+', label: 'Happy Customers' },
    { icon: Award, value: '10+', label: 'Years Experience' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Medical laboratory supplies" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-sm px-4 py-1">
                Trusted Wholesale Partner
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Quality Lab Supplies for{' '}
                <span className="text-primary">Healthcare Professionals</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Aagam Healthcare is your trusted wholesale partner for vacuum tubes, 
                laboratory consumables, and medical supplies. Get the best prices with 
                reliable delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => navigate('/products')}>
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Medical laboratory supplies" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-3xl font-bold text-secondary-foreground">{stat.value}</p>
                <p className="text-sm text-secondary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the best wholesale experience for healthcare professionals
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Card key={i} className="text-center border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Partner Brands</h2>
            <p className="text-muted-foreground">
              We work with industry-leading brands to bring you quality products
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            {brands.map(brand => (
              <div
                key={brand.id}
                className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground">{brand.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Explore our most popular laboratory supplies
              </p>
            </div>
            <Button variant="outline" onClick={() => navigate('/products')}>
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Category</h2>
            <p className="text-muted-foreground">
              Find exactly what you need for your laboratory
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <FlaskConical className="h-12 w-12 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Order?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Create an account to start ordering premium laboratory supplies at wholesale prices. 
              Get access to exclusive deals and fast delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate('/signup')}
              >
                Create Account
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
