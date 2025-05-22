import React from 'react';
import { useParams } from 'react-router-dom';
import InstructorCard from '../components/InstructorCard';
import TestimonialCard from '../components/TestimonialCard';
import AccordionItem from '../components/AccordionItem';

// Mock course data - in a real app, fetch this based on courseId or use a global state/context
const coursesData: {[key: string]: any} = {
  'iso-9001-foundation': {
    id: 'iso-9001-foundation',
    name: 'ISO 9001:2015 QMS Foundation',
    bannerImage: 'https://images.unsplash.com/photo-1520607162502-acabdf0825c9?q=80&w=2070&auto=format&fit=crop',
    description: 'An in-depth introduction to Quality Management Systems based on the ISO 9001:2015 standard. Perfect for beginners and those looking to understand the core principles.',
    whatYoullLearn: [
      'Key principles of Quality Management.',
      'The structure and requirements of ISO 9001:2015.',
      'Benefits of implementing a QMS.',
      'The PDCA (Plan-Do-Check-Act) cycle.',
      'Risk-based thinking in quality management.'
    ],
    whoIsThisFor: 'Individuals new to quality management, professionals seeking a refresher on ISO 9001, managers aiming to implement a QMS, students in business or engineering.',
    curriculum: [
      { id: 'm1', title: 'Module 1: Introduction to ISO 9001', description: 'Overview of the standard and its benefits.', lessons: ['Lesson 1.1: History of ISO', 'Lesson 1.2: Core Principles'] },
      { id: 'm2', title: 'Module 2: Clause-by-Clause Breakdown', description: 'Detailed review of each clause.', lessons: ['Lesson 2.1: Clauses 1-3', 'Lesson 2.2: Clause 4 - Context', 'Lesson 2.3: Clause 5 - Leadership'] },
      { id: 'm3', title: 'Module 3: Implementation & Auditing Basics', description: 'Getting started with implementation and audit preparation.', lessons: ['Lesson 3.1: Implementation Steps', 'Lesson 3.2: Internal Audits'] },
    ],
    instructor: {
      name: 'Dr. Emily Carter',
      title: 'Lead QMS Expert, PhD',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      bio: 'Dr. Carter has over 15 years of experience in quality management and ISO standardization. She has helped numerous organizations achieve ISO 9001 certification and is passionate about sharing her knowledge.',
      linkedinUrl: '#', // Placeholder
      email: 'emily.carter@example.com',
      experience: '15+ Years in Quality Management'
    },
    testimonials: [
      { id: 'ct1', quote: 'Dr. Carter made complex topics easy to grasp. The ISO 9001 Foundation course was a game-changer for my career!', name: 'Alex P.', title: 'Junior Quality Analyst', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 5 },
      { id: 'ct2', quote: 'Highly practical and engaging. I feel confident in applying these principles in my organization.', name: 'Jessica M.', title: 'Operations Supervisor', avatarUrl: 'https://randomuser.me/api/portraits/women/25.jpg', rating: 4 },
    ],
    faqs: [
      { id: 'faq1', question: 'Is this course suitable for beginners?', answer: 'Absolutely! This foundation course is designed for individuals with little to no prior knowledge of ISO 9001. We start with the basics and build up your understanding gradually.' },
      { id: 'faq2', question: 'How long will I have access to the course materials?', answer: 'You will have lifetime access to all course materials, including videos, documents, and any future updates.' },
      { id: 'faq3', question: 'Is there an exam at the end of the course?', answer: 'Yes, there is an online examination at the end. Upon successful completion, you will receive your digital certificate instantly.' },
    ]
  },
  // Add other courses here as needed for direct navigation via URL
   'iso-27001-implementer': {
    id: 'iso-27001-implementer',
    name: 'ISO 27001 Lead Implementer',
    bannerImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    description: 'Comprehensive training to implement and manage an Information Security Management System (ISMS) based on ISO 27001.',
    whatYoullLearn: [
      'Core concepts of ISMS.',
      'Step-by-step implementation guide for ISO 27001.',
      'Risk assessment and treatment.',
      'Audit preparation and management.',
      'Continuous improvement of ISMS.'
    ],
    whoIsThisFor: 'IT Managers, Security Professionals, Consultants, anyone involved in ISMS implementation.',
    curriculum: [
      { id: 'm1-27k', title: 'Module 1: ISMS Fundamentals', description: 'Understanding information security risks and controls.', lessons: ['Lesson 1.1: Intro to ISMS', 'Lesson 1.2: Asset Management'] },
      { id: 'm2-27k', title: 'Module 2: Implementing ISO 27001 Controls', description: 'Practical application of Annex A controls.', lessons: ['Lesson 2.1: Access Control', 'Lesson 2.2: Cryptography'] },
    ],
    instructor: {
      name: 'Michael Chen',
      title: 'Cybersecurity Principal',
      avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      bio: 'Michael is a seasoned cybersecurity expert with extensive experience in ISMS implementation and risk management. He holds CISSP and CISM certifications.',
      linkedinUrl: '#',
      email: 'michael.chen@example.com',
      experience: '12+ Years in Cybersecurity',
      testimonials: [
        { id: 'ct3', quote: 'This Lead Implementer course provided the exact knowledge I needed. Michael is a fantastic instructor!', name: 'David K.', title: 'Security Engineer', avatarUrl: 'https://randomuser.me/api/portraits/men/40.jpg', rating: 5 },
      ],
      faqs: [
        { id: 'faq27k1', question: 'What are the prerequisites for this Lead Implementer course?', answer: 'A basic understanding of information security concepts is recommended. Prior knowledge of ISO 27001 is helpful but not mandatory.' },
        { id: 'faq27k2', question: 'Does this course prepare for a certification exam?', answer: 'Yes, this course is designed to prepare you for the ISO 27001 Lead Implementer certification exam offered by recognized bodies.' },
      ]
    }
  }
};

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId ? coursesData[courseId] : null;

  if (!course) {
    return (
      <div className="container mx-auto py-10 px-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Course Not Found</h1>
        <p className="text-gray-700 mt-4">Sorry, we couldn't find the course you're looking for.</p>
        {/* You could add a link back to the courses page here */}
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      {/* 1. Banner with Course Name & background image - Placeholder */}
      <section 
        className="h-64 md:h-80 bg-cover bg-center rounded-lg shadow-md flex items-center justify-center text-white mb-10"
        style={{ backgroundImage: `url(${course.bannerImage || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop'})` }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-md">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{course.name}</h1>
        </div>
      </section>

      {/* Sections will be added here */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">
          {/* 2. Course Overview - Placeholder */}
          <section id="overview">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Course Overview</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
              <p className="text-gray-700 leading-relaxed">{course.description}</p>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">What You'll Learn:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {course.whatYoullLearn.map((item: string, index: number) => <li key={index}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Who Is This For:</h3>
                <p className="text-gray-700">{course.whoIsThisFor}</p>
              </div>
            </div>
          </section>

          {/* 3. Curriculum (module list or accordion) - Placeholder */}
          <section id="curriculum">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Curriculum</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              {course.curriculum && course.curriculum.length > 0 ? (
                course.curriculum.map((module: any, index: number) => (
                  <div key={module.id || index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{module.description}</p>
                    {module.lessons && module.lessons.length > 0 && (
                      <ul className="list-disc list-inside pl-4 text-gray-600 text-sm space-y-1">
                        {module.lessons.map((lesson: string, lessonIndex: number) => (
                          <li key={lessonIndex}>{lesson}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-600">Curriculum details coming soon...</p>
              )}
            </div>
          </section>
          
          {/* 6. Testimonials (specific to this course) - Placeholder */}
          <section id="course-testimonials">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Our Learners Say About This Course</h2>
            <div className="space-y-6">
              {course.testimonials && course.testimonials.length > 0 ? (
                course.testimonials.map((testimonial: any) => (
                  <TestimonialCard 
                    key={testimonial.id}
                    quote={testimonial.quote}
                    name={testimonial.name}
                    title={testimonial.title}
                    avatarUrl={testimonial.avatarUrl}
                    rating={testimonial.rating}
                  />
                ))
              ) : (
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600">No testimonials available for this course yet.</p>
                </div>
              )}
            </div>
          </section>

          {/* 7. FAQ accordion - Placeholder */}
          <section id="faq">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {course.faqs && course.faqs.length > 0 ? (
                course.faqs.map((faq: any, index: number) => (
                  <AccordionItem 
                    key={faq.id || index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpenInitially={index === 0} // Open the first FAQ by default
                  />
                ))
              ) : (
                <p className="text-gray-600">No FAQs available for this course yet.</p>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar for Instructor Bio and Pricing/Enroll */}
        <aside className="lg:col-span-1 space-y-10">
          {/* 4. Instructor Bio (profile card) - Placeholder */}
          <section id="instructor">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Instructor</h2>
            {course.instructor ? (
              <InstructorCard 
                name={course.instructor.name}
                title={course.instructor.title}
                bio={course.instructor.bio}
                avatarUrl={course.instructor.avatarUrl}
                linkedinUrl={course.instructor.linkedinUrl}
                email={course.instructor.email}
                experience={course.instructor.experience}
              />
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600">Instructor details not available.</p>
              </div>
            )}
          </section>

          {/* 5. Pricing and "Enroll Now" button - Placeholder */}
          <section id="pricing">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-blue-600 mb-4">$499</p> {/* Example Price */}
              <button className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailPage; 