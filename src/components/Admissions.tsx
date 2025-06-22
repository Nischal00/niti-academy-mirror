
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle, AlertCircle, Download, Clock } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Application Form",
      description: "Submit the completed application form with required documents",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      step: 2, 
      title: "Entrance Exam",
      description: "Appear for the entrance examination based on your chosen program",
      icon: AlertCircle,
      color: "bg-orange-500"
    },
    {
      step: 3,
      title: "Interview",
      description: "Participate in the personal interview and counseling session",
      icon: CheckCircle,
      color: "bg-green-500"
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Receive admission confirmation and complete enrollment process",
      icon: CheckCircle,
      color: "bg-purple-500"
    }
  ];

  const importantDates = [
    { event: "Application Opens", date: "March 15, 2024", status: "completed" },
    { event: "Application Deadline", date: "June 30, 2024", status: "active" },
    { event: "Entrance Exam", date: "July 15, 2024", status: "upcoming" },
    { event: "Results & Interview", date: "July 25, 2024", status: "upcoming" },
    { event: "Classes Begin", date: "August 15, 2024", status: "upcoming" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 border-green-200';
      case 'active': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'upcoming': return 'bg-gray-100 text-gray-700 border-gray-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="admissions" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-gradient-to-r from-green-100 to-blue-100 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Join Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Admissions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Join our community of learners and take the first step towards your bright future. 
            Follow our simple admission process to secure your place at NITI Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-10">Admission Process</h3>
            <div className="space-y-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {step.step}
                    </div>
                    {index < admissionSteps.length - 1 && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-200"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center group-hover:text-blue-600 transition-colors duration-300">
                      <step.icon size={24} className="mr-3 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Calendar className="mr-3" size={28} />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${getStatusColor(item.status)}`}>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-3" />
                        <span className="font-semibold">{item.event}</span>
                      </div>
                      <span className="font-bold">{item.date}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    <Download className="mr-2" size={20} />
                    Download Application Form
                  </Button>
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 transform hover:scale-105 transition-all duration-300">
                    Check Eligibility Criteria
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to action */}
        <div className="animate-fade-in">
          <Card className="border-0 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <CardContent className="relative z-10 text-center p-12">
              <h3 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Don't miss the opportunity to be part of NITI Academy's excellence in education. 
                Apply now and take the first step towards your bright future with endless possibilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-black font-bold px-8 py-4 transform hover:scale-105 transition-all duration-300 shadow-xl">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 transform hover:scale-105 transition-all duration-300">
                  Schedule Campus Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
