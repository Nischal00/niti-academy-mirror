
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Kathmandu, Nepal", "Ward No. 5, Teku"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-1-4567890", "+977-1-4567891"]
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["info@nitiacademy.edu.np", "admissions@nitiacademy.edu.np"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Sunday - Friday: 6:00 AM - 6:00 PM", "Saturday: 6:00 AM - 3:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for admissions, inquiries, or any information about our programs. 
            We're here to help you on your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-l-4 border-blue-900">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <info.icon size={24} className="text-blue-900 mr-3" />
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    </div>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Find Us on Map</h4>
              <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Location</p>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email address" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input placeholder="Enter message subject" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Enter your message here..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
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
