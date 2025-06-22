
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen, Star, ArrowRight } from "lucide-react";

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

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Academic <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Discover our comprehensive range of programs designed to provide quality education 
            and prepare students for successful careers in their chosen fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm transform hover:-translate-y-4 animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Gradient top border */}
              <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
              
              {program.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star size={12} className="mr-1" />
                    Popular
                  </div>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {program.title}
                </CardTitle>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <Clock size={14} className="mr-2 text-blue-500" />
                    {program.duration}
                  </div>
                  <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                    <Users size={14} className="mr-2 text-green-500" />
                    {program.students}
                  </div>
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
                      <div key={idx} className="text-sm text-gray-600 flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                        <span className={`w-2 h-2 bg-gradient-to-r ${program.color} rounded-full mr-3`}></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className={`w-full bg-gradient-to-r ${program.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white border-0 group`}>
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Choose the program that matches your interests and career goals. Our admissions team is here to guide you through the process.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold transform hover:scale-105 transition-all duration-300">
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
