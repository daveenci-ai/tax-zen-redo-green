import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Tax Planning", href: "#services" },
      { name: "Tax Preparation", href: "#services" },
      { name: "Bookkeeping", href: "#services" },
      { name: "Business Advisory", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Tax Tips", href: "#" },
      { name: "Tax Calendar", href: "#" },
      { name: "Resources", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4">
                  E-Tax CPA
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Your trusted CPA tax advisor in Austin, Texas. 
                  Providing professional tax services with integrity and expertise for over 20 years.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-3">
                <a 
                  href="tel:+15125550137"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(512) 555-0137</span>
                </a>
                <a 
                  href="mailto:hello@etaxcpa.com"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@etaxcpa.com</span>
                </a>
                <div className="flex items-center space-x-3 text-primary-foreground/80">
                  <MapPin className="h-4 w-4" />
                  <span>Austin, Texas</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-primary-foreground/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter signup */}
              <div className="mt-8">
                <h5 className="text-white font-semibold mb-3">
                  Tax Tips Newsletter
                </h5>
                <p className="text-sm text-primary-foreground/80 mb-4">
                  Get monthly tax tips and updates delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/60 focus:outline-none focus:border-accent"
                  />
                  <button className="px-4 py-2 bg-accent hover:bg-accent-light text-white rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/20 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} E-Tax CPA. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-6 text-sm text-primary-foreground/80">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-primary-foreground/60">
            <p>
              E-Tax CPA is a licensed CPA firm serving Austin, Texas and surrounding areas. 
              All tax advice and services are provided in accordance with applicable federal and state regulations.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;