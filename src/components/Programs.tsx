
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "4 Years",
      students: "120 Seats",
      description: "Comprehensive business education covering management, finance, marketing, and entrepreneurship.",
      highlights: ["Management Fundamentals", "Financial Analysis", "Marketing Strategy", "Business Ethics"],
      color: "from-blue-500 to-blue-600",
      popular: true
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      duration: "4 Years", 
      students: "80 Seats",
      description: "Advanced computer science program focusing on software development, networking, and emerging technologies.",
      highlights: ["Programming Languages", "Database Management", "Web Development", "Software Engineering"],
      color: "from-green-500 to-green-600",
      popular: false
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      students: "60 Seats", 
      description: "Advanced management program designed for working professionals and recent graduates.",
      highlights: ["Strategic Management", "Leadership", "International Business", "Research Methods"],
      color: "from-purple-500 to-purple-600",
      popular: true
    },
    {
      title: "+2 Science",
      duration: "2 Years",
      students: "200 Seats",
      description: "Higher secondary education in science stream preparing students for higher studies.",
      highlights: ["Physics", "Chemistry", "Biology", "Mathematics"],
      color: "from-orange-500 to-orange-600",
      popular: false
    },
    {
      title: "+2 Management",
      duration: "2 Years", 
      students: "150 Seats",
      description: "Management-focused higher secondary program building foundation for business studies.",
      highlights: ["Accounting", "Economics", "Business Studies", "English"],
      color: "from-teal-500 to-teal-600",
      popular: false
    },
    {
      title: "SEE Preparation",
      duration: "1 Year",
      students: "100 Seats",
      description: "Intensive preparation program for Secondary Education Examination (SEE).",
      highlights: ["All Core Subjects", "Exam Techniques", "Mock Tests", "Individual Attention"],
      color: "from-indigo-500 to-indigo-600",
      popular: false
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 0.8, 1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
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
          <motion.div 
            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Programs
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of programs designed to provide quality education 
            and prepare students for successful careers in their chosen fields.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full overflow-hidden">
                {/* Gradient top border */}
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${program.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                />
                
                {program.popular && (
                  <motion.div 
                    className="absolute top-4 right-4 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <Star size={12} className="mr-1" />
                      Popular
                    </div>
                  </motion.div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {program.title}
                  </CardTitle>
                  <div className="flex items-center gap-6 text-sm text-gray-600">
                    <motion.div 
                      className="flex items-center bg-gray-50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock size={14} className="mr-2 text-blue-500" />
                      {program.duration}
                    </motion.div>
                    <motion.div 
                      className="flex items-center bg-gray-50 px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Users size={14} className="mr-2 text-green-500" />
                      {program.students}
                    </motion.div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen size={16} className="mr-2 text-purple-500" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <motion.div 
                          key={idx}
                          className="text-sm text-gray-600 flex items-center bg-gray-50 px-3 py-2 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span 
                            className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg text-white border-0 group`}>
                      Learn More
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} className="ml-2" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Choose the program that matches your interests and career goals. Our admissions team is here to guide you through the process.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold">
                View All Programs
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
