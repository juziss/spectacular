import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Hotel Manager",
    company: "The Langham London",
    content:
      "Elite Cleaning has been our trusted partner for over 3 years. Their attention to detail and reliability is exceptional. Our guests consistently comment on the cleanliness of our facilities.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Property Director",
    company: "Foxtons Estate Agents",
    content:
      "We rely on Elite Cleaning for all our end-of-tenancy and pre-viewing cleans. They always deliver on time and to the highest standard, which is crucial for our business.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Facilities Manager",
    company: "Canary Wharf Group",
    content:
      "Professional, reliable, and eco-conscious. Elite Cleaning understands the demands of commercial properties and consistently exceeds our expectations.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-black text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what London's leading businesses say about our cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
