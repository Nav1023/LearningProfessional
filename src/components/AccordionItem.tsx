import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenInitially?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpenInitially = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenInitially);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full text-left"
      >
        <h4 className="text-lg font-medium text-gray-100 hover:text-blue-400">{question}</h4>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-400" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
      </button>
      {isOpen && (
        <div className="mt-3 pl-2 pr-2 text-gray-600 text-sm leading-relaxed">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem; 