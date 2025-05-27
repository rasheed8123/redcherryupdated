import { Phone, Mail, MapPin, Instagram, FileText } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const openPortfolio = () => {
    window.open('/portfolio.pdf', '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Inquiry for ${formData.service || 'Interior Services'} - ${formData.name}`;
    const body = `
Dear RedCherry Interiors Team,

I am interested in your services. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Needed: ${formData.service}

Message:
${formData.message}

Best regards,
${formData.name}
    `;

    const mailtoLink = `mailto:redcherryinteriorsbangalore@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-600/20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone Numbers</h4>
                  <p className="text-gray-300">7022830804</p>
                  <p className="text-gray-300">8792749814</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">redcherryinteriorsbangalore@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-300">
                    1st cross Subanna Garden, Bannerghatta Main Rd,<br />
                    opp. St. Hopkins college, Bengaluru - 27
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-500 bg-opacity-10 rounded-lg border border-red-500 border-opacity-20">
              <h4 className="font-semibold mb-3 text-red-400">Important Terms</h4>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>• 50% advance required before starting work</li>
                <li>• Balance payment after work completion</li>
                <li>• Not responsible for physical damages after completion</li>
                <li>• Design changes after work starts will incur extra charges</li>
                <li>• Transportation and installation may cost extra for heavy materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white placeholder-gray-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white placeholder-gray-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white placeholder-gray-300"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Service Needed</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="signage">Signage & Branding</option>
                  <option value="interior">Interior Design</option>
                  <option value="printing">Printing & Graphics</option>
                  <option value="blinds">Blinds & Flooring</option>
                  <option value="landscaping">Landscaping</option>
                  <option value="construction">Construction</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white placeholder-gray-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Instagram and Portfolio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram QR Section */}
          <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm text-center">
            <div className="mb-6">
              <Instagram className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Follow Us on Instagram</h3>
              <p className="text-gray-300 mb-6">@REDCHERRY_INTERIORS_BANGALORE</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <img 
                src="/lovable-uploads/3c6fa22a-3186-44e1-a69c-f985819ea552.png" 
                alt="Instagram QR Code" 
                className="w-48 h-48 mx-auto"
              />
            </div>
            
            <p className="text-sm text-gray-400">
              Scan QR code to follow us on Instagram
            </p>
          </div>

          {/* Portfolio PDF Section */}
          <div className="bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-sm text-center">
            <div className="mb-6">
              <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Portfolio</h3>
              <p className="text-gray-300 mb-6">View our complete portfolio and past projects</p>
            </div>
            
            <button 
              onClick={openPortfolio}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <FileText className="w-5 h-5 inline-block mr-2" />
              View Portfolio PDF
            </button>
            
            <p className="text-sm text-gray-400 mt-4">
              Download or view our complete project gallery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
