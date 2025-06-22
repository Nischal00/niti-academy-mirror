
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Committed to maintaining the highest standards of education with experienced faculty and modern teaching methods."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured programs designed to meet industry demands and prepare students for successful careers."
    },
    {
      icon: Users,
      title: "Supportive Community",
      description: "A nurturing environment that fosters personal growth, collaboration, and lifelong learning."
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "Strong industry connections and placement support to ensure students achieve their professional goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About NITI Academy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            NITI Academy has been a beacon of educational excellence, dedicated to nurturing 
            young minds and preparing them for the challenges of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <feature.icon size={48} className="text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Mission</h4>
                <p className="text-gray-600">
                  To provide quality education that empowers students with knowledge, skills, and values 
                  necessary for personal and professional success in a rapidly changing world.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Vision</h4>
                <p className="text-gray-600">
                  To be a leading educational institution recognized for excellence in teaching, 
                  innovation in learning, and contribution to society.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose NITI Academy?</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Experienced and qualified faculty
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                State-of-the-art facilities and infrastructure
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Industry-relevant curriculum and training
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Strong placement and career support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                Holistic development approach
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
