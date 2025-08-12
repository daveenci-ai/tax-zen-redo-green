import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight } from "lucide-react";
import advisorImage from "@/assets/cpa-advisor.jpg";

const Hero = () => {
  const [businessOwner, setBusinessOwner] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ businessOwner, name, email });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-subtle flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent-muted text-accent rounded-full text-sm font-semibold mb-4">
                CPA TAX ADVISOR AUSTIN, TX
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              LOOKING FOR A{" "}
              <span className="gradient-text">CPA TAX ADVISOR</span>{" "}
              YOU CAN TRUST?
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-accent mb-4">
                AND WE CAN HELP.
              </h2>
            </div>

            {/* Contact form */}
            <div className="card-professional max-w-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label className="text-lg font-semibold mb-4 block">
                    Do you own a business?
                  </Label>
                  <RadioGroup value={businessOwner} onValueChange={setBusinessOwner}>
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12"
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-professional w-full group">
                  Next
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Licensed CPA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Austin Local</span>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="lg:flex justify-center fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-2xl blur-3xl opacity-20 animate-float"></div>
              <img
                src={advisorImage}
                alt="Professional CPA advisor"
                className="relative z-10 w-full max-w-lg rounded-2xl shadow-professional hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;