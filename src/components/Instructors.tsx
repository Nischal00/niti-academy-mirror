
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Instructors = () => {
  const instructors = [
    {
      name: "Madhab Pokharel",
      role: "HR TEAM",
      image: "/placeholder.svg",
      expertise: ["Human Resources", "Team Management", "Career Guidance"]
    },
    {
      name: "Patricia Wood", 
      role: "Senior Instructor",
      image: "/placeholder.svg",
      expertise: ["Digital Marketing", "Content Strategy", "Social Media"]
    },
    {
      name: "Dammar Khadayat",
      role: "Senior Instructor", 
      image: "/placeholder.svg",
      expertise: ["Web Development", "Programming", "Technical Training"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-10 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
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
          <div className="inline-block px-6 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Skilled <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Instructors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced professionals who are passionate about teaching and helping you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -15 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <motion.img 
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-80 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="flex flex-wrap gap-2">
                        {instructor.expertise.map((skill, idx) => (
                          <span key={idx} className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      {instructor.name}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      {instructor.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our instructors bring years of industry experience and are committed to providing 
            personalized attention to help each student achieve their career goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
