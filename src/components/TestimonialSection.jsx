import React from 'react';
import { Star, Quote } from 'lucide-react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Software Engineer at Google",
      company: "Google",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "GeeksforGeeks helped me crack my Google interview. The DSA course and practice problems were incredibly helpful. Highly recommended!"
    },
    {
      name: "Priya Patel",
      position: "Full Stack Developer",
      company: "Microsoft",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "The web development course is comprehensive and well-structured. I landed my dream job at Microsoft after completing their full-stack program."
    },
    {
      name: "Amit Kumar",
      position: "Data Scientist",
      company: "Amazon",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "Amazing platform for learning programming. The articles are detailed, and the practice section is excellent for interview preparation."
    }
  ];

  return (
    <section className="testimonial-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">
            Join thousands of successful developers who learned with GeeksforGeeks
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote size={40} className="quote-icon" />
              
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#ffc107" color="#ffc107" />
                ))}
              </div>
              
              <p className="testimonial-text">"{testimonial.text}"</p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=2f8d46&color=ffffff&size=60`;
                  }}
                />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <p className="company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;