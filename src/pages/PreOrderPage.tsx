"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  Check,
  Gift,
  Shield,
  Truck,
  Star,
  Clock,
  CreditCard,
  Lock,
} from "lucide-react";

export default function PreOrderPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    quantity: 1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pre-Order Confirmed! 🎉",
      description:
        "You'll receive a confirmation email shortly. Welcome to the Aura family!",
    });
  };

  const regularPrice = 399;
  const preOrderPrice = 279;
  const savings = regularPrice - preOrderPrice;

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Limited Time Offer
          </Badge>
          <h1 className="text-5xl font-bold mb-6">
            Secure Your <span className="text-gradient">Aura Air Purifier</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Be among the first to experience revolutionary air purification.
            Early bird pricing ends in 7 days!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Pricing & Benefits */}
          <div className="lg:col-span-1 space-y-6">
            {/* Pricing Card */}
            <Card className="p-8 border-2 border-primary/20 bg-gradient-to-br from-card to-card-elevated">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">
                    Early Bird Special
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">
                    ${preOrderPrice}
                  </div>
                  <div className="text-sm text-muted-foreground line-through">
                    ${regularPrice}
                  </div>
                  <div className="text-sm font-medium text-green-600">
                    Save ${savings} (30% off)
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Free shipping & setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">5-year warranty included</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Priority customer support</span>
                </div>
              </div>

              <div className="text-center">
                <Badge
                  variant="secondary"
                  className="bg-accent/20 text-accent-strong"
                >
                  Expected delivery: March 2024
                </Badge>
              </div>
            </Card>

            {/* Exclusive Bonuses */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Gift className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Exclusive Pre-Order Bonuses</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">
                      Premium Filter Set
                    </div>
                    <div className="text-xs text-muted-foreground">
                      6-month supply ($120 value)
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">
                      Smart Home Integration
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Alexa & Google Assistant setup
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-sm">
                      VIP Support Access
                    </div>
                    <div className="text-xs text-muted-foreground">
                      24/7 priority customer service
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Security Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <div className="text-xs text-muted-foreground">
                  Secure Payment
                </div>
              </div>
              <div className="space-y-2">
                <Truck className="h-8 w-8 text-primary mx-auto" />
                <div className="text-xs text-muted-foreground">
                  Free Shipping
                </div>
              </div>
              <div className="space-y-2">
                <Lock className="h-8 w-8 text-primary mx-auto" />
                <div className="text-xs text-muted-foreground">
                  SSL Protected
                </div>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                Complete Your Pre-Order
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    Shipping Address
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        required
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-muted-foreground">
                    Order Summary
                  </h3>
                  <div className="bg-card-elevated rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Aura Air Purifier</span>
                      <span className="font-medium">${preOrderPrice}</span>
                    </div>
                    <div className="flex justify-between items-center text-green-600">
                      <span>Early Bird Discount</span>
                      <span>-${savings}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">${preOrderPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="btn-hero w-full">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Reserve Your Aura Today
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By placing this pre-order, you agree to our terms of service.
                  Your card will be charged when your order ships in March 2024.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
