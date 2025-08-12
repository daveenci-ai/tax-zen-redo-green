import { Award, Users, Clock, Star } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "500+",
      label: "Satisfied Clients"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      number: "20+",
      label: "Years Experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "CPA",
      label: "Licensed Professional"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "4.9",
      label: "Average Rating"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="fade-in">
            <span className="inline-block px-4 py-2 bg-accent-muted text-accent rounded-full text-sm font-semibold mb-4">
              ABOUT US
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted{" "}
              <span className="gradient-text">Tax Partner</span>{" "}
              in Austin
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over two decades of experience serving Austin businesses and individuals, 
                we've built our reputation on delivering exceptional tax services with a personal touch.
              </p>
              
              <p>
                Our approach goes beyond simple tax preparation. We focus on proactive tax planning, 
                helping our clients minimize their tax burden while maximizing their financial potential. 
                Every strategy we recommend is tailored to your unique situation and goals.
              </p>
              
              <p>
                As a locally-owned CPA firm, we understand the specific tax challenges facing 
                Austin residents and businesses. From tech startups to established enterprises, 
                from families to retirees, we provide the expertise and guidance you need to succeed.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Why Choose E-Tax CPA?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Personalized Service</h4>
                    <p className="text-sm text-muted-foreground">Direct access to your CPA, not a call center</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Proactive Planning</h4>
                    <p className="text-sm text-muted-foreground">Year-round tax optimization strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Expertise</h4>
                    <p className="text-sm text-muted-foreground">Deep understanding of Texas tax laws</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Technology-Driven</h4>
                    <p className="text-sm text-muted-foreground">Modern tools for efficient service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="fade-in">
            <div className="card-professional">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Trusted by Austin for Over 20 Years
              </h3>
              
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-accent-muted rounded-lg text-center">
                <p className="text-accent font-semibold mb-2">
                  "Excellence in service, integrity in practice"
                </p>
                <p className="text-sm text-muted-foreground">
                  Our commitment to every client, every time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;