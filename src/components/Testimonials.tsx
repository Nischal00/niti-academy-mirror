
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sanju B.k",
      date: "2025-03-23",
      rating: 5,
      text: "Best academy for learning digital marketing and other courses. Niti academy provides the quality education about the digital marketing course with friendly environment by an experienced teachers."
    },
    {
      name: "Gurudutta Koirala", 
      date: "2025-03-23",
      rating: 5,
      text: "I had an excellent experience with Niti Academy. The instructors are knowledgeable and provide real learning practical and engaging. I will recommend for anyone looking for digital marketing training!"
    },
    {
      name: "Fulmaya Sunar",
      date: "2025-03-23", 
      rating: 5,
      text: "Offers advanced digital marketing training with hands-on learning praised for boosting confidence in online business marketing. With best and highly experienced teachers."
    },
    {
      name: "Bishnu Bishwokarma",
      date: "2025-03-23",
      rating: 5,
      text: "Best digital marketing in pokhara where we can learn skills like graphic design, website development, basic computer training and best choice for our next step."
    },
    {
      name: "Sujaina Zalari",
      date: "2025-03-23",
      rating: 5,
      text: "Best place for learning digital marketing. NITI Academy's Digital Marketing course is well-structured and practical. The instructors are knowledgeable, and the hands-on training makes learning easy. A great choice for beginners and professionals!"
    },
    {
      name: "Astha Sunar",
      date: "2025-03-23",
      rating: 5,
      text: "Niti academy provides top-notch training with expert instructors and a welcoming atmosphere. A fantastic place to enhance the skills. Highly recommended!!!"
    },
    {
      name: "Samy Sunndas",
      date: "2025-03-23",
      rating: 5,
      text: "Niti Academy is an excellent place to learn digital marketing. Their teaching methods are clear, practical, and easy to understand. The instructors are not only highly skilled but also friendly and always ready to help. The positive and comfortable classroom environment makes learning enjoyable and engaging. I highly recommend Niti Academy to anyone looking to master digital marketing!"
    },
    {
      name: "Roshan Jalari",
      date: "2025-03-23",
      rating: 5,
      text: "Best learning platform"
    },
    {
      name: "Sa Dev",
      date: "2025-03-23",
      rating: 5,
      text: "Niti Academy in Pokhara, Nepal, offers job-oriented training with experienced instructors, hands-on learning, and internship support. Best place to learn digital marketing and other courses too."
    }
  ];

  const stats = [
    { number: "5000+", label: "Learners Trained" },
    { number: "25", label: "Google Reviews" },
    { number: "5.0", label: "Average Rating" }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full opacity-30 blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
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
          <div className="inline-block px-6 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
            Student Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from real learners who have experienced NITI Academy.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-white rounded-lg shadow-lg p-6">
            <div className="mr-4">
              <h3 className="text-xl font-bold">Nitiacademy</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">25 Google reviews</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Write a review
            </button>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">Google</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
