import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-black text-primary mb-4">Spectacular Cleaning London</h3>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Professional cleaning services for London's hospitality, property, and business sectors. Trusted by
              leading establishments for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+44 20 7123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">hello@elitecleaninglondon.co.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">London & Greater London</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Hotel Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Estate Agent Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Deep Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Emergency Cleaning
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Specialist Cleaning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Central London</li>
              <li>City of London</li>
              <li>Westminster</li>
              <li>Camden</li>
              <li>Islington</li>
              <li>Kensington & Chelsea</li>
              <li>+ All London Boroughs</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-foreground/60">© 2024  Spectacular Cleaning Services. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
