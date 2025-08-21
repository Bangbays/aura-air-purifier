"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Wind,
  Smartphone,
  Shield,
  Leaf,
  Brain,
  Settings,
  BarChart3,
  Clock,
  Wifi,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20">
      <section className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Advanced Technology
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Revolutionary Features for{" "}
            <span className="text-gradient">Perfect Air</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how Aura&apos;s cutting-edge technology transforms your
            living space into a sanctuary of pure, clean air with intelligent
            automation and eco-friendly innovation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-primary rounded-xl">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold">Smart Sensor Technology</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our AI-powered sensor array continuously analyzes your
                environment with military-grade precision, detecting even the
                smallest particles and pollutants.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 border-2 hover:border-primary transition-colors duration-300">
                <Zap className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Real-time Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Instant identification of PM2.5, VOCs, allergens, and other
                  airborne contaminants.
                </p>
              </Card>
              <Card className="p-6 border-2 hover:border-primary transition-colors duration-300">
                <BarChart3 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Machine learning algorithms predict air quality trends and
                  optimize performance.
                </p>
              </Card>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/smart-sensor-tech.jpg"
              alt="Smart sensor technology"
              width={600}
              height={400}
              className="rounded-2xl shadow-medium w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      <section className="bg-card-elevated py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-3 bg-gradient-accent rounded-xl">
                <Wind className="h-6 w-6 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold">Multi-Stage Eco-Filtration</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our revolutionary 5-stage filtration system combines cutting-edge
              technology with sustainable materials for unmatched purification
              performance.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                stage: "Pre-Filter",
                icon: Shield,
                desc: "Captures large particles and extends filter life",
              },
              {
                stage: "HEPA H13",
                icon: Wind,
                desc: "Removes 99.97% of particles ≥0.3 microns",
              },
              {
                stage: "Activated Carbon",
                icon: Leaf,
                desc: "Eliminates odors and chemical pollutants",
              },
              {
                stage: "UV-C Sterilization",
                icon: Zap,
                desc: "Destroys bacteria, viruses, and microorganisms",
              },
              {
                stage: "Ion Generation",
                icon: Smartphone,
                desc: "Creates negative ions for fresher air",
              },
            ].map((filter, index) => (
              <Card
                key={index}
                className="p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <filter.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{filter.stage}</h3>
                <p className="text-sm text-muted-foreground">{filter.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-2">
            <Image
              src="/mobile-app-connectivity.jpg"
              alt="Mobile app connectivity"
              width={450}
              height={900}
              className="rounded-2xl shadow-medium w-full max-w-md mx-auto"
            />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 animate-pulse"></div>
          </div>

          <div className="space-y-8 lg:order-1">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-accent rounded-xl">
                  <Smartphone className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold">Seamless App Integration</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Take complete control of your air quality with our award-winning
                mobile app. Monitor, control, and optimize your Aura from
                anywhere in the world.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Wifi,
                  title: "Remote Control",
                  desc: "Adjust settings from anywhere with WiFi connectivity",
                },
                {
                  icon: Clock,
                  title: "Smart Scheduling",
                  desc: "Create custom schedules for different times and activities",
                },
                {
                  icon: BarChart3,
                  title: "Air Quality Insights",
                  desc: "Detailed analytics and health recommendations",
                },
                {
                  icon: Settings,
                  title: "Custom Profiles",
                  desc: "Personalized settings for different family members",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-card-elevated transition-colors duration-200"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <Card className="bg-gradient-primary text-white p-12 text-center rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Air Quality?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have already experienced
            the Aura difference. Limited early-bird pricing ends soon.
          </p>
          <Link href="/pre-order">
            <Button size="lg" variant="secondary" className="font-semibold">
              Pre-Order Now - Save 30%
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
