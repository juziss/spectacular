import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Leaf } from "lucide-react"

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Satisfied Clients" },
  { icon: Clock, value: "24/7", label: "Availability" },
  { icon: Leaf, value: "100%", label: "Eco-Friendly" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-serif font-black text-foreground mb-6">
              Why Choose Spectacular Cleaning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience serving London's hospitality and commercial sectors, we've built our
              reputation on reliability, quality, and exceptional customer service.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Fully Trained & Insured Staff</h3>
                  <p className="text-muted-foreground">
                    All our cleaning professionals are thoroughly vetted, trained, and fully insured for your peace of
                    mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Eco-Friendly Products</h3>
                  <p className="text-muted-foreground">
                    We use environmentally responsible cleaning products that are safe for your staff, guests, and the
                    environment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">
                    We work around your business hours with flexible scheduling options including evenings, weekends,
                    and holidays.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-serif font-black text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src="/placeholder-xxt9r.png"
                alt="Professional cleaning equipment and team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
