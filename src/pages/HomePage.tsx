import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Shield, Smartphone, Leaf, Zap, Wind, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Breathe <span className="text-gradient">Pure</span> Innovation
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Experience the future of air purification with Aura&apos;s
                  smart, eco-friendly technology that adapts to your
                  environment.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/pre-order">
                  <Button className="btn-hero w-full sm:w-auto">
                    Pre-Order Now
                  </Button>
                </Link>
                <Link
                  href="/features"
                  aria-label="Learn more about Aura Air Purifier features"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>99.97% Filtration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-4 w-4 text-accent-strong" />
                  <span>Eco-Friendly</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="floating">
                <Image
                  src="/aura-air-purifier-hero.jpg"
                  alt="Aura Air Purifier"
                  width={500}
                  height={500}
                  priority
                  className="w-full max-w-md mx-auto rounded-3xl shadow-strong"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-accent rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-card-elevated">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Aura?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology meets elegant design for the ultimate air
              purification experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-glass p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Sensors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Advanced AI-powered sensors continuously monitor air quality and
                automatically adjust purification levels for optimal
                performance.
              </p>
            </Card>

            <Card className="card-glass p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wind className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Multi-Stage Filtration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our revolutionary eco-friendly filter system removes 99.97% of
                airborne particles, allergens, and pollutants for pristine air
                quality.
              </p>
            </Card>

            <Card className="card-glass p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">App Connectivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Control your Aura remotely with our intuitive mobile app.
                Schedule cleaning cycles, monitor air quality, and receive smart
                insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-primary rounded-3xl p-12 text-center text-white">
            <Heart className="h-12 w-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold mb-4">
              Join 10,000+ Happy Pre-Order Customers
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the future of air purification.
              Limited early-bird pricing available for a short time.
            </p>
            <Link href="/pre-order">
              <Button size="lg" variant="secondary" className="font-semibold">
                Secure Your Aura Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
