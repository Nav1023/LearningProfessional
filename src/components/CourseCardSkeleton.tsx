import React from 'react';

const CourseCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300"></div>
      
      <div className="p-5 flex flex-col flex-grow">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
        
        {/* CPD Hours Badge Placeholder (Optional) */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-3"></div>

        {/* Description Placeholder */}
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        
        {/* Button Placeholder */}
        <div className="mt-auto pt-3">
          <div className="h-10 bg-gray-300 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton; 