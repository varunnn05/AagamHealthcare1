import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}aagam.png`}
                alt="Aagam Healthcare Logo"
                className="h-12 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner for quality laboratory supplies and healthcare products. 
              Serving medical professionals with excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Our Brands</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-secondary-foreground/80">DBO</span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/80">STRUMED</span>
              </li>
              <li>
                <span className="text-sm text-secondary-foreground/80">MedLab Pro</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No.+18,+Shree+Sharda+Row+House,+B%2FH.+Sant+Tukaram+Society+6,+Pal,+Surat.+394510"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Plot No. 18, Shree Sharda Row House, B/H. Sant Tukaram Society 6, Pal, Surat. 394510
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+917862937216"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 78629 37216
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:aagamhc1@gmail.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  aagamhc1@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Aagam Healthcare. All rights reserved.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              GST Registered | Wholesale Only
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
