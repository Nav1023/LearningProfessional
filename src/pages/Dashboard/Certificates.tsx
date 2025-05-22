import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Award, ExternalLink } from 'lucide-react';

// Mock data for earned certificates
const earnedCertificates = [
  {
    id: 'cert-001',
    courseName: 'ISO 9001:2015 QMS Foundation',
    certificateName: 'Certificate of Completion - ISO 9001 Foundation',
    dateIssued: '2023-10-26',
    credentialId: 'UC-XYZ-12345',
    imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=600&auto=format&fit=crop', // Generic certificate/achievement image
    pdfLink: '#' // Placeholder for actual PDF download link
  },
  {
    id: 'cert-002',
    courseName: 'Advanced Auditing Techniques',
    certificateName: 'Certificate of Expertise - Advanced Auditing',
    dateIssued: '2023-11-15',
    credentialId: 'UC-ABC-67890',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop',
    pdfLink: '#'
  },
];

const CertificatesPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Certificates</h1>
      {earnedCertificates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnedCertificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <img 
                src={cert.imageUrl} 
                alt={cert.certificateName} 
                className="w-full h-40 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <Award className="w-10 h-10 text-yellow-500 mb-3 self-center" />
                <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">{cert.certificateName}</h2>
                <p className="text-sm text-gray-500 mb-1 text-center">For: {cert.courseName}</p>
                <p className="text-xs text-gray-400 mb-3 text-center">Issued: {cert.dateIssued} | ID: {cert.credentialId}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <a 
                    href={cert.pdfLink} 
                    download 
                    className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 text-sm"
                  >
                    <Download size={18} className="mr-2" />
                    Download PDF
                  </a>
                  {/* Optional: Link to view certificate on a public page if applicable */}
                  {/* 
                  <Link 
                    to={`/certificates/view/${cert.credentialId}`} 
                    className="mt-2 w-full flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium py-2 px-4 rounded-md text-sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Details
                  </Link> 
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <Award className="w-16 h-16 text-gray-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold text-gray-700 mb-3">No Certificates Earned Yet</h2>
          <p className="text-gray-500 mb-6">Complete your courses to earn certificates and showcase your achievements.</p>
          <Link 
            to="/dashboard/my-courses"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            View My Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage; 