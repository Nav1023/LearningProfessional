import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  courseLink?: string; // Optional: link to the specific course detail page
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, courseLink = '#' }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          to={courseLink} 
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300"
        >
          View Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard; 