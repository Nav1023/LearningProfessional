import React from 'react';
import CourseCard from '../components/CourseCard';
import { Laptop, Globe, Award } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Banner Section */}
      <section 
        className="bg-cover bg-center h-[60vh] text-white py-24 px-10 object-fill"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Train Online. Certify Globally.</h1>
          <p className="text-2xl mb-12">Start your ISO training journey today</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Explore Courses
          </button>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CourseCard 
              title="ISO 9001: Lead Auditor"
              description="Master the principles of quality management systems and lead successful audits."
              imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseLink="/courses/iso-9001-lead-auditor" // Example link
            />
            <CourseCard 
              title="ISO 27001: Information Security"
              description="Learn to implement and manage an Information Security Management System."
              imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseLink="/courses/iso-27001-infosec"
            />
            <CourseCard 
              title="ISO 14001: Environmental Management"
              description="Understand environmental management systems and drive sustainability."
              imageUrl="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseLink="/courses/iso-14001-environmental"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Laptop className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Online</h3>
              <p className="text-gray-600 text-sm">Learn at your own pace, anytime, anywhere, with our fully online platform.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Globe className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recognized Globally</h3>
              <p className="text-gray-600 text-sm">Our certifications are respected and acknowledged worldwide.</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Award className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Certification</h3>
              <p className="text-gray-600 text-sm">Receive your digital certificate immediately upon course completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Learners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <TestimonialCard 
              quote="This platform transformed my understanding of ISO standards. The courses are comprehensive and easy to follow."
              name="Sarah L."
              title="Quality Manager"
              avatarUrl="https://randomuser.me/api/portraits/women/44.jpg"
              rating={5}
            />
            <TestimonialCard 
              quote="Excellent content and a very user-friendly interface. I was able to get certified quickly and efficiently!"
              name="John B."
              title="IT Consultant"
              avatarUrl="https://randomuser.me/api/portraits/men/62.jpg"
              rating={5}
            />
            <TestimonialCard 
              quote="The practical examples and case studies were invaluable. Highly recommend for anyone in the compliance field."
              name="Maria G."
              title="Environmental Specialist"
              avatarUrl="https://randomuser.me/api/portraits/women/77.jpg"
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated!</h2>
          <p className="text-lg mb-8 mx-auto max-w-2xl">Subscribe to our newsletter to get the latest news about new courses, special offers, and industry insights directly in your inbox.</p>
          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
            <label htmlFor="email-newsletter" className="sr-only">Email address</label>
            <input 
              type="email" 
              id="email-newsletter"
              placeholder="Enter your email address"
              className="w-full sm:flex-grow px-4 py-3 rounded-md text-gray-700 focus:ring-2 focus:ring-green-400 focus:outline-none" 
              required 
            />
            <button 
              type="submit" 
              className="w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePage; 