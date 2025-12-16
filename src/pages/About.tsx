import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Clock, 
  Shield,
  CheckCircle2 
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We partner only with trusted manufacturers to ensure every product meets the highest standards.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our team is dedicated to providing personalized service and support for every customer.',
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: 'Fast and dependable logistics to ensure your supplies arrive when you need them.',
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Building long-term relationships through honest business practices and transparency.',
    },
  ];

  const milestones = [
    { year: '2014', event: 'Company Founded' },
    { year: '2016', event: 'Expanded Product Range' },
    { year: '2018', event: 'Partnership with DBO' },
    { year: '2020', event: 'Online Platform Launch' },
    { year: '2022', event: 'STRUMED Partnership' },
    { year: '2024', event: '1000+ Happy Customers' },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/20 py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Trusted Partner in Healthcare Supplies
            </h1>
            <p className="text-lg text-muted-foreground">
              Aagam Healthcare has been serving medical professionals and laboratories 
              with premium quality supplies since 2014. We believe in building lasting 
              partnerships through quality, reliability, and excellent service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground">
                  To provide healthcare professionals with reliable access to high-quality 
                  laboratory supplies at competitive wholesale prices, enabling them to 
                  deliver better patient care through accurate diagnostics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground">
                  To become India's most trusted wholesale partner for healthcare and 
                  laboratory supplies, setting the standard for quality, service, 
                  and customer satisfaction in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-accent">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Aagam Healthcare
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Card key={i} className="border-none shadow-md text-center">
                <CardContent className="pt-6">
                  <div className="mx-auto w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              A decade of growth and commitment to excellence
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <div
                    key={i}
                    className={`relative flex items-center ${
                      i % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`w-5/12 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}
                    >
                      <div className="bg-card rounded-lg p-4 shadow-md">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <p className="text-foreground">{milestone.event}</p>
                      </div>
                    </div>
                    {/* Center Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Aagam Healthcare?</h2>
              <div className="space-y-4">
                {[
                  'Authorized distributor of premium brands',
                  'Competitive wholesale pricing',
                  'Quality assurance on every product',
                  'Fast and reliable delivery across India',
                  'Dedicated customer support team',
                  'Flexible payment options',
                  'Easy online ordering system',
                  'Transparent pricing with GST',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 text-card-foreground">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Have questions about our products or services? Our team is here to help.
              </p>
              <div className="space-y-3">
                <p><strong>Email:</strong> aagamhc1@gmail.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> 123 Healthcare Avenue, Medical District, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
