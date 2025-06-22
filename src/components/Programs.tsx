
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, BookOpen } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Business Administration (BBA)",
      duration: "4 Years",
      students: "120 Seats",
      description: "Comprehensive business education covering management, finance, marketing, and entrepreneurship.",
      highlights: ["Management Fundamentals", "Financial Analysis", "Marketing Strategy", "Business Ethics"]
    },
    {
      title: "Bachelor of Computer Application (BCA)",
      duration: "4 Years", 
      students: "80 Seats",
      description: "Advanced computer science program focusing on software development, networking, and emerging technologies.",
      highlights: ["Programming Languages", "Database Management", "Web Development", "Software Engineering"]
    },
    {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years",
      students: "60 Seats", 
      description: "Advanced management program designed for working professionals and recent graduates.",
      highlights: ["Strategic Management", "Leadership", "International Business", "Research Methods"]
    },
    {
      title: "+2 Science",
      duration: "2 Years",
      students: "200 Seats",
      description: "Higher secondary education in science stream preparing students for higher studies.",
      highlights: ["Physics", "Chemistry", "Biology", "Mathematics"]
    },
    {
      title: "+2 Management",
      duration: "2 Years", 
      students: "150 Seats",
      description: "Management-focused higher secondary program building foundation for business studies.",
      highlights: ["Accounting", "Economics", "Business Studies", "English"]
    },
    {
      title: "SEE Preparation",
      duration: "1 Year",
      students: "100 Seats",
      description: "Intensive preparation program for Secondary Education Examination (SEE).",
      highlights: ["All Core Subjects", "Exam Techniques", "Mock Tests", "Individual Attention"]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of programs designed to provide quality education 
            and prepare students for successful careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-900">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {program.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    {program.students}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {program.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <BookOpen size={16} className="mr-2" />
                    Key Highlights
                  </h4>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-900 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
