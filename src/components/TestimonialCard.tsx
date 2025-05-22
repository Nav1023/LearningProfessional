import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  rating: number; // Number of stars (e.g., 4, 5)
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatarUrl, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center">
      <img src={avatarUrl} alt={name} className="w-20 h-20 rounded-full mb-4 object-cover"/>
      <div className="flex mb-3">
        {renderStars()}
      </div>
      <p className="text-gray-600 italic mb-6 text-center leading-relaxed text-sm">"{quote}"</p>
      <h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
      <p className="text-gray-500 text-xs">{title}</p>
    </div>
  );
};

export default TestimonialCard; 