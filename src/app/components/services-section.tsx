import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Briefcase, Sparkles, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Hotel Cleaning",
    description:
      "Comprehensive cleaning services for hotels, B&Bs, and hospitality venues. From guest rooms to public areas, we maintain the highest standards.",
    features: ["Daily housekeeping", "Deep cleaning", "Laundry services", "Public area maintenance"],
  },
  {
    icon: Home,
    title: "Estate Agent Cleaning",
    description:
      "Professional property cleaning for estate agents. End of tenancy, pre-viewing cleans, and property maintenance services.",
    features: ["End of tenancy", "Pre-viewing cleans", "Property maintenance", "Inventory cleaning"],
  },
  {
    icon: Briefcase,
    title: "Commercial Cleaning",
    description: "Tailored cleaning solutions for offices, retail spaces, and commercial properties across London.",
    features: ["Office cleaning", "Retail spaces", "Carpet cleaning", "Window cleaning"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive deep cleaning services for properties requiring thorough sanitisation and restoration.",
    features: ["Post-construction", "Move-in cleaning", "Sanitisation", "Restoration cleaning"],
  },
  {
    icon: Clock,
    title: "Emergency Cleaning",
    description:
      "24/7 emergency cleaning services for urgent situations. Available across London with rapid response times.",
    features: ["24/7 availability", "Rapid response", "Damage restoration", "Emergency sanitisation"],
  },
  {
    icon: Shield,
    title: "Specialist Cleaning",
    description: "Specialised cleaning services including carpet cleaning, upholstery, and hard floor maintenance.",
    features: ["Carpet cleaning", "Upholstery care", "Floor restoration", "Pressure washing"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-black text-third-green mb-6">Our Cleaning Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to meet the unique needs of London&apos;s hospitality, property, and
            business sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-third-green/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-serif font-bold text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}