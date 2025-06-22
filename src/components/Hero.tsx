
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <GraduationCap size={64} className="text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Excellence in Education
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in">
            Empowering students with quality education and innovative learning experiences 
            to shape tomorrow's leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Explore Programs
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
