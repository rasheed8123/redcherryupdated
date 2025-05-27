
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-red-200 rounded-full opacity-30 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">RedCherry</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At RedCherry Interiors, we believe in the power of great design to transform spaces and elevate experiences. 
              Our philosophy of <span className="font-bold text-red-600">"Think, Design, Built"</span> drives everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From conceptualization to execution, we provide comprehensive solutions for all your interior and exterior needs. 
              Our team of experts brings years of experience and creativity to every project, ensuring excellence in every detail.
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-red-500 mb-2 animate-pulse">500+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-red-500 mb-2 animate-pulse">100%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center group">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">Premium Quality Materials</span>
              </div>
              <div className="flex items-center group">
                <Award className="w-6 h-6 text-yellow-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">Award-Winning Designs</span>
              </div>
              <div className="flex items-center group">
                <Users className="w-6 h-6 text-blue-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">Expert Team</span>
              </div>
              <div className="flex items-center group">
                <Clock className="w-6 h-6 text-purple-500 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 group-hover:text-red-500 transition-colors duration-300">Timely Delivery</span>
              </div>
            </div>
            
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
          
          <div className="relative">
            {/* Enhanced Process Card */}
            <div className="relative z-10 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 text-center">Our Process</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-2">Think</h4>
                    <p className="text-sm opacity-90 leading-relaxed">Understand your vision, requirements, and transform ideas into actionable plans</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-2">Design</h4>
                    <p className="text-sm opacity-90 leading-relaxed">Create innovative, functional designs that exceed expectations and reflect your style</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-2">Built</h4>
                    <p className="text-sm opacity-90 leading-relaxed">Execute with precision, quality craftsmanship, and attention to every detail</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Background Effects */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-red-200 to-red-300 rounded-3xl opacity-20 transform rotate-3"></div>
            <div className="absolute -top-12 -left-12 w-full h-full bg-gradient-to-br from-red-100 to-red-200 rounded-3xl opacity-10 transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
