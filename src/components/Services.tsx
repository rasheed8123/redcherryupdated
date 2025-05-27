
import { useState } from "react";
import { Eye, Sparkles } from "lucide-react";

const services = [
  {
    category: "Signage & Branding",
    items: ["Signage", "Sign Boards", "Branding", "LED 2D", "3D Boards"],
    description: "Professional signage solutions that make your brand stand out",
    color: "from-red-500 to-red-600",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "LED 2D Boards", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "3D Boards", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Branding Solutions", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "Interior Design",
    items: ["Wall Graphics", "Wallpapers", "Printed Wallpapers", "PVC Panel", "Molding"],
    description: "Transform your spaces with our creative interior solutions",
    color: "from-gray-700 to-gray-800",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "Wall Graphics", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "PVC Panels", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Wallpapers", image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "Printing & Graphics",
    items: ["Vinyl Printing", "U.V Print", "Wall Graphics", "Sun-Film", "Frosted"],
    description: "High-quality printing services for all your graphic needs",
    color: "from-red-600 to-red-700",
    image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "Vinyl Printing", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "UV Printing", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Frosted Glass", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "Blinds & Flooring",
    items: ["Office Blinds", "Roller Blinds", "Zebra Blinds", "Flooring Mats"],
    description: "Functional and stylish window treatments and flooring solutions",
    color: "from-gray-600 to-gray-700",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "Office Blinds", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Roller Blinds", image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Zebra Blinds", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "Landscaping",
    items: ["Grass", "Vertical Garden"],
    description: "Green solutions to bring nature into your spaces",
    color: "from-green-500 to-green-600",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "Vertical Gardens", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Artificial Grass", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    category: "Construction",
    items: ["Commercial Interior", "Residential Interior", "Exterior Building Construction"],
    description: "Complete construction and renovation services",
    color: "from-red-500 to-red-700",
    image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    subServices: [
      { name: "Commercial Interior", image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Residential Interior", image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
      { name: "Building Construction", image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
    ]
  }
];

export const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Our <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <Sparkles className="w-8 h-8 text-red-500 ml-3 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive solutions for all your interior and exterior needs with cutting-edge technology and creative excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 ${
                hoveredCard === index ? "scale-105" : ""
              } overflow-hidden`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <img 
                  src={service.image} 
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">
                      {service.category.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {service.category}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center text-sm text-gray-700 transform transition-all duration-300 hover:translate-x-3 hover:text-red-500"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0 animate-pulse"></div>
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Gallery
                </button>
              </div>

              {/* Sub-services Gallery */}
              {selectedService === index && (
                <div className="absolute inset-0 bg-white rounded-3xl z-10 p-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{service.category} Gallery</h4>
                    <button 
                      onClick={() => setSelectedService(null)}
                      className="text-gray-500 hover:text-red-500 transition-colors duration-300"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-4 h-96 overflow-y-auto">
                    {service.subServices.map((subService, subIndex) => (
                      <div key={subIndex} className="relative rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                        <img 
                          src={subService.image} 
                          alt={subService.name}
                          className="w-full h-24 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{subService.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-12 py-6 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center justify-center">
              Get Custom Quote
              <Sparkles className="ml-3 w-6 h-6 group-hover:animate-spin" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
