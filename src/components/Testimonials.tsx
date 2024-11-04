import React from 'react';
import { MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechVision",
    content: "Bichitras transformed our digital presence completely. Their expertise in both design and development is unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    content: "The level of creativity and technical excellence they bring to every project is extraordinary. Truly a game-changer for our business.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emma Williams",
    role: "Founder, DesignHub",
    content: "Working with Bichitras has been an incredible experience. They don't just deliver projects; they deliver excellence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <MessageSquare className="w-8 h-8 text-royal-gold mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto">
            Hear what our clients say about their experience with Bichitras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-royal-celestial/80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-royal-celestial/90 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;