import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calculator, FileText, BookOpen, TrendingUp, Shield, Clock, X } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "tax-planning",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Tax Planning",
      description: "Legal strategies to help you keep more of what you earn.",
      details: {
        subtitle: "Proactive, legal strategies that align income, timing, and spending to minimize taxes over time.",
        features: [
          "Split & time income to reduce rates",
          "Defer/avoid tax via eligible options", 
          "Align spending with deductions"
        ],
        outcomes: [
          "Protect asset growth",
          "Defer income for cash flow",
          "Estate/retirement planning"
        ],
        note: "Clients typically save several times the fee."
      }
    },
    {
      id: "tax-preparation",
      icon: <FileText className="h-8 w-8" />,
      title: "Tax Preparation",
      description: "Individual & business returns prepared and e-filed.",
      details: {
        subtitle: "Individual and business returns prepared, reviewed for accuracy, and e-filed—plus guidance for next year.",
        features: [
          "Accuracy & compliance review",
          "Deduction/credit optimization",
          "E-filed return",
          "Next year guidance"
        ],
        pricing: [
          "Individual: from $895",
          "Business: from $1,595"
        ],
        note: "Final pricing after complexity review."
      }
    },
    {
      id: "bookkeeping",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Bookkeeping for Growth",
      description: "Monthly/quarterly books with reports and advisory.",
      details: {
        subtitle: "Professional bookkeeping services designed to support your business growth and financial clarity.",
        features: [
          "Monthly/quarterly reconciliation",
          "Financial statement preparation",
          "Cash flow management",
          "Advisory and insights"
        ],
        outcomes: [
          "Clear financial picture",
          "Better business decisions",
          "Tax-ready records"
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-accent-muted text-accent rounded-full text-sm font-semibold mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tax and financial services tailored to help you minimize taxes, 
            maximize savings, and achieve your financial goals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`card-professional hover-lift fade-in group cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300"
                    onClick={() => setSelectedService(service.id)}
                  >
                    Learn More
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                      <span className="text-accent">{service.icon}</span>
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.details.subtitle}
                    </p>

                    {service.details.features && (
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">What you get</h4>
                        <ul className="space-y-2">
                          {service.details.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.details.outcomes && (
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Outcomes</h4>
                        <ul className="space-y-2">
                          {service.details.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-success rounded-full"></div>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.details.pricing && (
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Pricing</h4>
                        <ul className="space-y-2">
                          {service.details.pricing.map((price, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gold rounded-full"></div>
                              <span>{price}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {service.details.note && (
                      <div className="bg-accent-muted p-4 rounded-lg">
                        <p className="text-accent font-medium">
                          {service.details.note}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-4 pt-4">
                      <Button className="btn-professional flex-1">
                        Get Started
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 fade-in">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Optimize Your Taxes?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific situation and create a personalized tax strategy that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold">
                Call (512) 555-0137
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;