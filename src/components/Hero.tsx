import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Think", "Design", "Built"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Corporate Interior Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/25 to-red-50/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url('/lovable-uploads/1796af00-abb3-4d71-8152-6b1188f3ae4a.png')`
          }}
        ></div>
        
        {/* Decorative Interior Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-red-100/30 to-red-200/30 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-red-200/40 to-red-300/40 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-red-50/20 to-red-100/20 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-red-300/25 to-red-400/25 rounded-full opacity-40 animate-spin slow"></div>
        
        {/* Floating Design Elements */}
        <div className="absolute top-1/4 left-1/3 animate-bounce delay-500">
          <Sparkles className="w-6 h-6 text-red-300 opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-bounce delay-1000">
          <Sparkles className="w-4 h-4 text-red-400 opacity-50" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-20 mx-auto mb-6 transform hover:scale-110 transition-all duration-500">
              <img 
                src="/lovable-uploads/7d1d12d5-29c6-4fa2-b37c-46951d2efbb5.png" 
                alt="RedCherry Interiors Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Enhanced Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
              REDCHERRY
            </span>
            <br />
            <span className="text-gray-800">INTERIORS</span>
          </h1>

          {/* Enhanced Animated Tagline */}
          <div className="mb-8 h-20 flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              <span className="inline-block transform transition-all duration-700 ease-in-out bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                {texts[currentText]}
              </span>
              <span className="text-red-500 animate-pulse">.</span>
            </h2>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-gray-800 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 font-bold">
            A complete solution for all your <span className="font-extrabold text-red-600">interior</span> and <span className="font-extrabold text-red-600">exterior</span> needs. From signage to construction, we bring your vision to life with precision and creativity.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in delay-500">
            <button 
              onClick={scrollToServices}
              className="group px-10 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Explore Services
                <Sparkles className="ml-2 w-5 h-5 group-hover:animate-spin" />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-5 border-3 border-red-500 text-red-500 font-bold text-lg rounded-xl hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
            >
              Get Custom Quote
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in delay-700">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-800 font-medium">Projects</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-800 font-medium">Services</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-800 font-medium">Satisfaction</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <div className="text-gray-800 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
