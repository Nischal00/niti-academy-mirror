
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Target, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Committed to maintaining the highest standards of education with experienced faculty and modern teaching methods.",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured programs designed to meet industry demands and prepare students for successful careers.",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "A nurturing environment that fosters personal growth, collaboration, and lifelong learning.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Strong industry connections and placement support to ensure students achieve their professional goals.",
      color: "text-orange-600"
    }
  ];

  const achievements = [
    { icon: TrendingUp, number: "98%", label: "Placement Rate", color: "bg-green-100 text-green-600" },
    { icon: Award, number: "25+", label: "Awards Won", color: "bg-blue-100 text-blue-600" },
    { icon: Shield, number: "15+", label: "Years Excellence", color: "bg-purple-100 text-purple-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            x: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-block px-6 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NITI Academy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NITI Academy has been a beacon of educational excellence, dedicated to nurturing 
            young minds and preparing them for the challenges of tomorrow with innovation and dedication.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${achievement.color} mb-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon size={32} />
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold text-gray-900 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {achievement.number}
                  </motion.div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-50 group-hover:to-blue-100 transition-all duration-300`}>
                      <feature.icon size={48} className={`${feature.color} transition-transform duration-300`} />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Mission & Vision
            </h3>
            <div className="space-y-8">
              <motion.div 
                className="relative pl-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full"
                  whileHover={{ scale: 1.5 }}
                />
                <h4 className="text-xl font-bold text-blue-600 mb-3">Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality education that empowers students with knowledge, skills, and values 
                  necessary for personal and professional success in a rapidly changing world.
                </p>
              </motion.div>
              <motion.div 
                className="relative pl-8"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="absolute left-0 top-2 w-4 h-4 bg-purple-600 rounded-full"
                  whileHover={{ scale: 1.5 }}
                />
                <h4 className="text-xl font-bold text-purple-600 mb-3">Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading educational institution recognized for excellence in teaching, 
                  innovation in learning, and meaningful contribution to society.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white border-0 shadow-2xl">
              <CardContent className="p-10">
                <h3 className="text-2xl font-bold mb-8 text-center">Why Choose NITI Academy?</h3>
                <ul className="space-y-4">
                  {[
                    "Experienced and qualified faculty",
                    "State-of-the-art facilities and infrastructure", 
                    "Industry-relevant curriculum and training",
                    "Strong placement and career support",
                    "Holistic development approach",
                    "Modern learning methodologies"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, ease: "easeOut" }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.span 
                        className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full mr-4"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="group-hover:text-yellow-200 transition-colors duration-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
