import React from 'react';
import { Linkedin, Mail, Briefcase } from 'lucide-react'; // Example icons

interface InstructorCardProps {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
  email?: string;
  experience?: string; 
}

const InstructorCard: React.FC<InstructorCardProps> = (
  { name, title, bio, avatarUrl, linkedinUrl, email, experience }
) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <img 
        src={avatarUrl} 
        alt={`Instructor ${name}`} 
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-200 shadow-md"
      />
      <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-blue-600 font-semibold text-sm mb-3">{title}</p>
      
      {experience && (
        <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
          <Briefcase size={14} className="mr-1.5" />
          <span>{experience}</span>
        </div>
      )}

      <p className="text-gray-600 text-sm leading-relaxed mb-4 px-2 text-justify hyphens-auto">{bio}</p>
      
      <div className="flex justify-center space-x-3">
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
            <Linkedin size={24} />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="text-gray-500 hover:text-gray-700 transition-colors">
            <Mail size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default InstructorCard; 