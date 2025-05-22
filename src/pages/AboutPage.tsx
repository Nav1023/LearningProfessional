import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8 text-gray-700">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-600">About LearningPortal</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering professionals worldwide with accessible, high-quality ISO auditor training and certification.
        </p>
      </header>

      <section className="mb-16 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-4">
          At LearningPortal, our mission is to bridge the knowledge gap in ISO standards and auditing practices. We believe that expert-led training should be available to everyone, everywhere, fostering a global community of certified professionals who can drive improvement and compliance within their organizations.
        </p>
        <p className="text-lg leading-relaxed">
          We are committed to providing comprehensive, up-to-date course materials, interactive learning experiences, and a supportive environment to help our students achieve their certification goals and advance their careers.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Expert-Led Curriculum</h3>
            <p className="text-sm leading-relaxed">
              Our courses are designed and delivered by seasoned ISO auditors and industry experts with years of practical experience in global organizations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Flexible Online Learning</h3>
            <p className="text-sm leading-relaxed">
              Learn at your own pace, anytime, anywhere. Our platform is fully responsive, allowing you to access courses on desktop, tablet, or mobile.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Globally Recognized Certification</h3>
            <p className="text-sm leading-relaxed">
              Achieve certifications that are recognized and respected by industries worldwide, enhancing your professional credibility and career prospects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Interactive Content</h3>
            <p className="text-sm leading-relaxed">
              Engage with dynamic video lectures, real-world case studies, quizzes, and downloadable resources to solidify your understanding.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Dedicated Support</h3>
            <p className="text-sm leading-relaxed">
              Our student support team is here to assist you throughout your learning journey, from enrollment to certification.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-green-600 mb-3">Instant Certification</h3>
            <p className="text-sm leading-relaxed">
              Receive your digital certificate immediately upon successful completion of your course and final assessment.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center bg-green-600 text-white py-12 px-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community of Learners</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Start your ISO training journey with LearningPortal today and unlock new career opportunities.
        </p>
        <Link to="/courses" className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 text-lg">
          Explore Our Courses
        </Link>
      </section>
    </div>
  );
};

export default AboutPage; 