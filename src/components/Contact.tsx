import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "(512) 555-0137",
      action: "tel:+15125550137"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "hello@etaxcpa.com",
      action: "mailto:hello@etaxcpa.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Austin, Texas",
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation. Let's discuss how we can help 
            optimize your taxes and secure your financial future.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="fade-in">
            <div className="card-professional">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12"
                      placeholder="(512) 555-0000"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us about your tax situation and how we can help..."
                  />
                </div>

                <Button type="submit" className="btn-professional w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact information */}
          <div className="fade-in">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help with all your tax and financial needs. 
                  Reach out using any of the methods below, and we'll get back to you promptly.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-professional hover-lift cursor-pointer group"
                    onClick={() => info.action && window.open(info.action)}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency contact */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <h4 className="font-semibold text-accent mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  During tax season (January - April), we offer extended hours 
                  and emergency consultation services.
                </p>
                <Button className="btn-accent">
                  Schedule Emergency Consultation
                </Button>
              </div>

              {/* Service areas */}
              <div className="bg-gradient-subtle rounded-lg p-6">
                <h4 className="font-semibold mb-3">Service Areas</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Austin</div>
                  <div>• Round Rock</div>
                  <div>• Cedar Park</div>
                  <div>• Georgetown</div>
                  <div>• Pflugerville</div>
                  <div>• Leander</div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Remote services available throughout Texas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;