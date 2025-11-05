import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Help Center */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="text-white/80 hover:text-white text-sm transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="/articles" className="text-white/80 hover:text-white text-sm transition-colors">
                  Recent Articles
                </a>
              </li>
              <li>
                <a href="/process-serving-laws" className="text-white/80 hover:text-white text-sm transition-colors">
                  Process Serving Laws
                </a>
              </li>
              <li>
                <a href="/glossary" className="text-white/80 hover:text-white text-sm transition-colors">
                  Process Serving Glossary
                </a>
              </li>
            </ul>
          </div>

          {/* Server Center */}
          <div>
            <h3 className="text-lg font-bold mb-4">Server Center</h3>
            <ul className="space-y-2">
              <li>
                <a href="/join" className="text-white/80 hover:text-white text-sm transition-colors">
                  Join as a Process Server
                </a>
              </li>
              <li>
                <a href="/server-resources" className="text-white/80 hover:text-white text-sm transition-colors">
                  Server Resources
                </a>
              </li>
              <li>
                <a href="/articles" className="text-white/80 hover:text-white text-sm transition-colors">
                  Recent Articles
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="text-white/80 hover:text-white text-sm transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/network" className="text-white/80 hover:text-white text-sm transition-colors">
                  Network
                </a>
              </li>
              <li>
                <a href="/become-a-process-server" className="text-white/80 hover:text-white text-sm transition-colors">
                  Become a Process Server
                </a>
              </li>
            </ul>
          </div>

          {/* Site Menu */}
          <div>
            <h3 className="text-lg font-bold mb-4">Site Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-white text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white text-sm transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/login" className="text-white/80 hover:text-white text-sm transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white/80 hover:text-white text-sm transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="mb-6">
              <a href="/contact" className="text-white/80 hover:text-white text-sm transition-colors">
                Email Us
              </a>
            </div>
            <h4 className="text-base font-semibold mb-3">Follow LocalProcessServer</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/70 text-sm">
            © 2025 LocalProcessServer.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
