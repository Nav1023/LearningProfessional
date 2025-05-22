import React from 'react';
import { Link } from 'react-router-dom';
import {RefreshCw } from 'lucide-react'; // Using RefreshCw for Resume

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 'course-001',
    title: 'ISO 9001:2015 QMS Foundation',
    imageUrl: 'https://images.unsplash.com/photo-1520607162502-acabdf0825c9?q=80&w=600&auto=format&fit=crop',
    progress: 75, // Percentage
    lastAccessed: 'Yesterday',
    courseLink: '/courses/iso-9001-foundation' // Link to actual course detail page for now
  },
  {
    id: 'course-002',
    title: 'ISO 27001 Lead Implementer',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
    progress: 30,
    lastAccessed: '3 days ago',
    courseLink: '/courses/iso-27001-implementer'
  },
  {
    id: 'course-003',
    title: 'ISO 14001 Environmental Management',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=600&auto=format&fit=crop',
    progress: 0, // Not started
    lastAccessed: 'Never',
    courseLink: '#' // Placeholder link
  },
];

const MyCoursesPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Enrolled Courses</h1>
      {enrolledCourses.length > 0 ? (
        <div className="space-y-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <img 
                src={course.imageUrl} 
                alt={course.title} 
                className="w-full md:w-48 h-32 object-cover rounded-md shadow-sm"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-700 hover:text-blue-600 mb-1">
                    <Link to={course.courseLink}>{course.title}</Link>
                </h2>
                <p className="text-sm text-gray-500 mb-2">Last accessed: {course.lastAccessed}</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <div 
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mb-3">{course.progress}% complete</p>
              </div>
              <Link 
                to={course.courseLink} // Or a specific lesson link if available
                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm w-full md:w-auto"
              >
                <RefreshCw size={18} className="mr-2" />
                {course.progress > 0 ? 'Resume Course' : 'Start Course'}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">No Courses Yet!</h2>
          <p className="text-gray-500 mb-6">You haven't enrolled in any courses. Explore our catalog to start learning.</p>
          <Link 
            to="/courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Explore Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCoursesPage; 