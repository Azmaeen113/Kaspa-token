import { Send, Twitter, Instagram } from "lucide-react";
// Using favicon.png from public folder

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-card/50 border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/favicon.png" alt="KASCompute" className="h-10 w-10" />
              <span className="text-2xl font-bold">KASCompute</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Decentralized compute power on Kaspa blockchain
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:team@kascompute.io" className="hover:text-primary transition-colors">
                team@kascompute.io
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#vision" className="text-muted-foreground hover:text-primary transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="#tokenomics" className="text-muted-foreground hover:text-primary transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="http://kascompute.org/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Website
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://t.me/KASCompute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all glow-hover"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/KASCompute"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all glow-hover"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kascompute/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all glow-hover"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 KASCompute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
