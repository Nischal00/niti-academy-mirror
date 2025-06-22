
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, CheckCircle, AlertCircle } from "lucide-react";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Application Form",
      description: "Submit the completed application form with required documents",
      icon: FileText
    },
    {
      step: 2, 
      title: "Entrance Exam",
      description: "Appear for the entrance examination based on your chosen program",
      icon: AlertCircle
    },
    {
      step: 3,
      title: "Interview",
      description: "Participate in the personal interview and counseling session",
      icon: CheckCircle
    },
    {
      step: 4,
      title: "Final Selection",
      description: "Receive admission confirmation and complete enrollment process",
      icon: CheckCircle
    }
  ];

  const importantDates = [
    { event: "Application Opens", date: "March 15, 2024" },
    { event: "Application Deadline", date: "June 30, 2024" },
    { event: "Entrance Exam", date: "July 15, 2024" },
    { event: "Results & Interview", date: "July 25, 2024" },
    { event: "Classes Begin", date: "August 15, 2024" }
  ];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admissions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards your bright future. 
            Follow our simple admission process to secure your place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Admission Process</h3>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <step.icon size={20} className="mr-2 text-blue-900" />
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-t-4 border-yellow-500">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="mr-3 text-blue-900" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{item.event}</span>
                      <span className="text-blue-900 font-semibold">{item.date}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800">
                    Download Application Form
                  </Button>
                  <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
                    Check Eligibility Criteria
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-blue-900 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Don't miss the opportunity to be part of NITI Academy's excellence in education. 
            Apply now and take the first step towards your bright future.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
