import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  courseLink?: string; // Optional: link to the specific course detail page
  cpdHours?: string | number; // Added for CPD hours badge
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, imageUrl, courseLink = '#', cpdHours }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
        {cpdHours && (
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {cpdHours} CPD Hours
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <Link 
          to={courseLink} 
          className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors duration-300 text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard; 