import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const openPortfolio = () => {
    // Open the PDF from public directory in a new tab
    window.open('/portfolio.pdf', '_blank');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src="/lovable-uploads/7d1d12d5-29c6-4fa2-b37c-46951d2efbb5.png" 
                alt="RedCherry Interiors Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">REDCHERRY</h1>
              <p className="text-xs text-red-500 font-medium">INTERIORS</p>
            </div>
          </div>

          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-red-500 transition-all duration-300 relative group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => scrollToSection("services")} className="text-gray-700 hover:text-red-500 transition-all duration-300 relative group">
                <span className="relative z-10">Services</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => scrollToSection("about")} className="text-gray-700 hover:text-red-500 transition-all duration-300 relative group">
                <span className="relative z-10">About</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={openPortfolio} className="text-gray-700 hover:text-red-500 transition-all duration-300 relative group">
                <span className="relative z-10">Portfolio</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-red-500 transition-all duration-300 relative group">
                <span className="relative z-10">Contact</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 transition-transform duration-300 hover:scale-110">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection("home")} className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-all duration-300 hover:translate-x-2">
                Home
              </button>
              <button onClick={() => scrollToSection("services")} className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-all duration-300 hover:translate-x-2">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-all duration-300 hover:translate-x-2">
                About
              </button>
              <button onClick={openPortfolio} className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-all duration-300 hover:translate-x-2">
                Portfolio
              </button>
              <button onClick={() => scrollToSection("contact")} className="block px-3 py-2 text-gray-700 hover:text-red-500 transition-all duration-300 hover:translate-x-2">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
