import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import CourseCardSkeleton from '../components/CourseCardSkeleton';
import { Search, Filter } from 'lucide-react'; // Icons for UI elements

// Mock data for courses - in a real app, this would come from an API
const mockCourses = [
  {
    id: '1',
    title: 'ISO 9001:2015 QMS Foundation',
    description: 'Understand the fundamentals of Quality Management Systems based on ISO 9001.',
    imageUrl: 'https://images.unsplash.com/photo-1573495627361-ab2b300e8403?q=80&w=1974&auto=format&fit=crop',
    cpdHours: 8,
    courseLink: '/courses/iso-9001-foundation'
  },
  {
    id: '2',
    title: 'ISO 27001 Lead Implementer',
    description: 'Learn to implement an Information Security Management System (ISMS) effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop',
    cpdHours: 24,
    courseLink: '/courses/iso-27001-implementer'
  },
  {
    id: '3',
    title: 'ISO 14001 Environmental Awareness',
    description: 'Gain awareness of environmental management and its importance in organizations.',
    imageUrl: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop',
    cpdHours: 4,
    courseLink: '/courses/iso-14001-awareness'
  },
  {
    id: '4',
    title: 'ISO 45001: OHS Management Systems',
    description: 'Understand requirements for an occupational health and safety (OHS) management system.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    cpdHours: 16,
    courseLink: '/courses/iso-45001-ohs'
  },
  {
    id: '5',
    title: 'ISO 22301 Business Continuity',
    description: 'Learn to plan, establish, implement, operate, and continually improve a BCMS.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    cpdHours: 16,
    courseLink: '/courses/iso-22301-continuity'
  },
  {
    id: '6',
    title: 'Integrated Management Systems (IMS)',
    description: 'Explore how to integrate multiple management system standards effectively.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
    cpdHours: 20,
    courseLink: '/courses/ims-integrated'
  }
];

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('All Standards');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedDuration, setSelectedDuration] = useState('All Durations');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredCourses = useMemo(() => {
    let courses = mockCourses;
    if (searchTerm) {
      courses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Placeholder for actual filtering based on selectedStandard, selectedType, selectedDuration
    // For now, they don't alter the 'courses' array further to keep it simple and fix the error.
    return courses;
  }, [searchTerm, selectedStandard, selectedType, selectedDuration]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Courses</h1>

      <section className="mb-10">
        <div className="mb-10 p-6 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
            {/* ISO Standard Dropdown Placeholder */}
            <div>
              <label htmlFor="iso-standard" className="block text-sm font-medium text-gray-700 mb-1">ISO Standard</label>
              <select 
                id="iso-standard" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedStandard}
                onChange={(e) => setSelectedStandard(e.target.value)}
              >
                <option value="All Standards">All Standards</option>
                <option value="9001">ISO 9001 (Quality)</option>
                <option value="27001">ISO 27001 (Info Security)</option>
                <option value="14001">ISO 14001 (Environmental)</option>
                <option value="45001">ISO 45001 (OHS)</option>
                <option value="22301">ISO 22301 (Business Continuity)</option>
              </select>
            </div>

            {/* Course Type Dropdown Placeholder */}
            <div>
              <label htmlFor="course-type" className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
              <select 
                id="course-type" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="All Types">All Types</option>
                <option value="auditor">Auditor</option>
                <option value="internal">Internal Auditor</option>
                <option value="awareness">Awareness</option>
                <option value="foundation">Foundation</option>
                <option value="implementer">Implementer</option>
              </select>
            </div>

            {/* Duration Dropdown Placeholder */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select 
                id="duration" 
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                <option value="All Durations">All Durations</option>
                <option value="1day">1 Day (up to 8h)</option>
                <option value="2-3days">2-3 Days (9-24h)</option>
                <option value="4+days">4+ Days (25h+)</option>
              </select>
            </div>

            {/* Search Bar */}
            <div className="lg:col-span-1">
              <label htmlFor="search-courses" className="block text-sm font-medium text-gray-700 mb-1">Search Courses</label>
              <div className="relative mt-1">
                <input 
                  type="text" 
                  id="search-courses"
                  className="block w-full py-2 px-3 pl-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="e.g., ISO 9001 Auditor"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <button className="mt-6 w-full md:w-auto flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-300">
            <Filter className="h-5 w-5 mr-2" /> Apply Filters
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Courses</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <CourseCardSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {filteredCourses.map(course => (
              <CourseCard 
                key={course.id}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                courseLink={`/courses/${course.id}`} 
                cpdHours={course.cpdHours}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <Search size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">No Courses Found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria, or check back later for new courses!</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default CoursesPage; 