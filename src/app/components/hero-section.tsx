import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-4 pb-8 lg:pt-6 lg:pb-12 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by 500+ London businesses
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-serif font-black text-principal-green mb-6 leading-tight">
              Professional Cleaning Services for{" "}
              <span className="text-third-green">London Businesses</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Spectacular Cleaning solutions for hotels, estate agents, and
              commercial properties across London. We deliver exceptional
              results with fully trained, insured staff and eco-friendly
              products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-principal-green hover:bg-second-green/90 text-primary-foreground"
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-third-green text-third-green hover:bg-third-green hover:text-primary-foreground bg-transparent"
              >
                View Services
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/placeholder-09sx7.png"
                alt="Professional cleaning team at work in London"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-2xl font-serif font-black text-third-green">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-2xl font-serif font-black text-third-green">
                500+
              </div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
