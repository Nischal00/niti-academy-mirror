
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Award, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Admissions = () => {
  const admissionSteps = [
    {
      icon: MessageSquare,
      title: "Registration",
      description: "Fill out the registration form with your basic information and course interest",
      color: "text-blue-600"
    },
    {
      icon: Phone,
      title: "Consultation",
      description: "Get personalized guidance from our counselors about the best course for you",
      color: "text-green-600"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Choose flexible timings that work with your schedule",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Start Learning",
      description: "Begin your journey with expert instructors and hands-on training",
      color: "text-orange-600"
    }
  ];

  const whyChooseUs = [
    "Learn from Industry Experts – Get guidance from professional designers",
    "Practical, Hands-On Training – Work on real-world projects", 
    "Career support and job placement",
    "Flexible timing and 24/7 support",
    "Modern facilities and equipment",
    "Industry-recognized certification"
  ];

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Join NITI Academy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Registration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Just give a brief info for registration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-900">
                  Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <Input placeholder="Enter your full name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input placeholder="Enter your phone number" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="Enter your email address" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <Input placeholder="Enter your address" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Write your interest or query</label>
                  <Textarea placeholder="Tell us about your course interest or any questions..." className="w-full h-24" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                  Connect Now
                </Button>
                <div className="text-center pt-4">
                  <p className="text-gray-600 mb-3">Join from WhatsApp directly</p>
                  <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                    <Phone className="mr-2" size={16} />
                    9802852261
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              NITI Academy is a premier training institute dedicated to empowering learners with practical skills and industry expertise. Our goal is to help individuals Learn, Grow & Succeed in digital marketing, graphic design, and more! Join us today and take the first step toward a successful and fulfilling career.
            </p>
            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>
            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Read More
            </Button>
          </motion.div>
        </div>

        {/* Admission Process */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300`}>
                      <step.icon size={32} className={`${step.color} transition-transform duration-300`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Opening Hours: 24/7 hours</h3>
          <p className="text-blue-100 mb-6">
            Contact us anytime for admissions and course inquiries
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <span>9802852261</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" size={20} />
              <span>info.nitiacademy@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" size={20} />
              <span>Pokhara 9, Nayabazar</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
