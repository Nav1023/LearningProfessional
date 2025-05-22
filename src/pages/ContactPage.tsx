import React, { useState } from 'react';
import AccordionItem from '../components/AccordionItem'; // Reusing AccordionItem
import { User, Mail, MessageSquare, Send, MapPin, Phone, Info } from 'lucide-react';

// Mock FAQ data for Contact Page
const contactFaqs = [
  {
    id: 'cfq1',
    question: 'How can I enroll in a course?',
    answer: 'You can enroll in any course directly from the course detail page. Simply click the "Enroll Now" button and follow the checkout process. If you need assistance, feel free to reach out to us via this contact form.'
  },
  {
    id: 'cfq2',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and direct bank transfers for corporate enrollments. Please contact us for bank transfer details.'
  },
  {
    id: 'cfq3',
    question: 'How do I access my course materials after enrollment?',
    answer: 'Once enrolled, you can access all your course materials through your personal dashboard under the "My Courses" section. You will have lifetime access to these materials.'
  },
  {
    id: 'cfq4',
    question: 'Are there any prerequisites for the courses?',
    answer: 'Most of our foundation-level courses do not have prerequisites. However, some advanced or lead auditor courses may require prior knowledge or completion of a foundation course. Specific prerequisites are listed on each course detail page.'
  },
  {
    id: 'cfq5',
    question: 'Can I get a refund if I am not satisfied?',
    answer: 'We offer a 30-day money-back guarantee if you are not satisfied with a course, provided you have not completed more than 25% of the course content. Please refer to our Terms of Service for full details or contact support.'
  },
];

// Mock Office Locations
const officeLocations = [
    {
        name: 'Global Headquarters',
        address: '123 Learning Lane, Education City, EC 45678, Knowledge Land',
        phone: '+1 (555) 123-4567',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.610234249964!2d-73.98785368459354!3d40.74844097932805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1605205280000' // Example: Empire State Building
    },
    {
        name: 'European Office',
        address: '45 Wissen Strasse, Lernstadt, LS 67890, Germany',
        phone: '+49 (30) 987-6543',
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8000000000005!2d13.404953!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1605205380000' // Example: Brandenburg Gate
    }
]

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus(null);

    if (!name || !email || !subject || !message) {
      setFormStatus({ type: 'error', text: 'All fields are required. Please fill them out.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setFormStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Mock form submission
    console.log('Contact form submitted:', { name, email, subject, message });
    setFormStatus({ type: 'success', text: 'Thank you for your message! We will get back to you shortly. (Mock Submission)' });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Get In Touch</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We're here to help! Whether you have questions about our courses, need support, or just want to say hello, feel free to reach out.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact Form */}
        <section className="lg:col-span-3 bg-white p-6 md:p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h2>
          {formStatus && (
            <div className={`p-3 rounded-md mb-4 text-sm ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {formStatus.text}
            </div>
          )}
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
                  <div className="px-3 pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent" placeholder="Your Name" />
              </div>
            </div>
            <div>
              <label htmlFor="email-contact" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
                  <div className="px-3 pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="email" id="email-contact" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <div className="mt-1 relative flex items-center rounded-md shadow-sm border border-gray-300">
                  <div className="px-3 pointer-events-none">
                      <Info className="h-5 w-5 text-gray-400" />
                  </div>
                  <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="block w-full py-2 border-0 focus:ring-0 sm:text-sm placeholder-gray-400 bg-transparent" placeholder="e.g., Question about ISO 9001 Course" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="form-textarea" placeholder="Your message..."></textarea>
            </div>
            <div className="text-right">
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Sidebar for FAQ and Locations */}
        <aside className="lg:col-span-2 space-y-8">
          {/* FAQ Section */}
          <section className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-1">
              {contactFaqs.slice(0, 3).map((faq, index) => ( // Show first 3 FAQs, more can be added
                <AccordionItem 
                  key={faq.id} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpenInitially={index === 0} 
                />
              ))}
            </div>
            {contactFaqs.length > 3 && (
                <div className="mt-4 text-center">
                    <a href="#all-faqs" className="text-blue-600 hover:text-blue-700 font-medium text-sm">View All FAQs (Placeholder)</a>
                </div>
            )}
          </section>

          {/* Office Locations */}
          <section className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Our Offices</h2>
            {officeLocations.map(office => (
                <div key={office.name} className="mb-6 pb-6 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                    <h3 className="text-lg font-semibold text-blue-700 mb-1 flex items-center">
                        <MapPin size={18} className="mr-2 text-blue-500" /> {office.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                        <Phone size={14} className="mr-1.5 text-gray-500" /> {office.phone}
                    </p>
                    <div className="mt-3 h-48 bg-gray-200 rounded-md overflow-hidden">
                         <iframe 
                            src={office.mapEmbedUrl}
                            width="100%" 
                            height="100%" 
                            style={{ border:0 }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            title={`Map for ${office.name}`}
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage; 