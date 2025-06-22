
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Kathmandu, Nepal", "Ward No. 5, Teku"],
      color: "text-red-500 bg-red-50"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-1-4567890", "+977-1-4567891"],
      color: "text-green-500 bg-green-50"
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@nitiacademy.edu.np", "admissions@nitiacademy.edu.np"],
      color: "text-blue-500 bg-blue-50"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 6:00 AM - 6:00 PM", "Saturday: 6:00 AM - 3:00 PM"],
      color: "text-purple-500 bg-purple-50"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Get in touch with us for admissions, inquiries, or any information about our programs. 
            We're here to help you on your educational journey every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-10">Get in Touch</h3>
            
            {/* Contact info cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon size={24} />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">{info.title}</h4>
                    <div className="space-y-2">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm leading-relaxed hover:text-blue-600 transition-colors duration-300 cursor-pointer">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map section */}
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                  <MapPin className="mr-3 text-blue-600" size={24} />
                  Find Us on Map
                </h4>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="text-white" size={32} />
                    </div>
                    <p className="text-gray-600 font-medium">Interactive Map Location</p>
                    <p className="text-gray-500 text-sm mt-2">Click to view detailed location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <MessageCircle className="mr-3" size={28} />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <Input placeholder="Enter your phone number" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Subject *
                  </label>
                  <Input placeholder="Enter message subject" className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300" />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Enter your message here..."
                    rows={5}
                    className="border-2 border-gray-200 focus:border-blue-500 rounded-lg transition-all duration-300 resize-none"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
