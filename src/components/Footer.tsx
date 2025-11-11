import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-gradient-gold mb-4">Lumière</h3>
            <p className="text-muted-foreground text-sm">
              Crafting timeless elegance since 1950. Your trusted destination for luxury jewellery.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Gold</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Silver</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Diamond</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Engagement Rings</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Locations</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Sustainability</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@lumierejewels.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Luxury Ave, NY</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Lumière Jewels. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
