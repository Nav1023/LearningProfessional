import React, { useState, useMemo } from 'react';
import { Download, Search, Filter, FileText, ListChecks, ClipboardList } from 'lucide-react';

interface Resource {
  id: string;
  name: string;
  type: 'Template' | 'Checklist' | 'Audit Report' | 'Guide';
  standard: string; // e.g., 'ISO 9001', 'ISO 27001', 'General'
  description: string;
  fileUrl: string; // Placeholder for download link
  icon: React.ElementType;
}

const mockResources: Resource[] = [
  {
    id: 'res-001',
    name: 'QMS Implementation Checklist',
    type: 'Checklist',
    standard: 'ISO 9001',
    description: 'A comprehensive checklist to guide your ISO 9001 QMS implementation project.',
    fileUrl: '#',
    icon: ListChecks
  },
  {
    id: 'res-002',
    name: 'Internal Audit Report Template',
    type: 'Template',
    standard: 'ISO 19011',
    description: 'A ready-to-use template for documenting internal audit findings and conclusions.',
    fileUrl: '#',
    icon: FileText
  },
  {
    id: 'res-003',
    name: 'ISMS Risk Assessment Guide',
    type: 'Guide',
    standard: 'ISO 27001',
    description: 'Step-by-step guide on conducting an information security risk assessment.',
    fileUrl: '#',
    icon: ClipboardList
  },
  {
    id: 'res-004',
    name: 'Corrective Action Request (CAR) Form',
    type: 'Template',
    standard: 'General',
    description: 'A standard form for documenting and tracking corrective actions.',
    fileUrl: '#',
    icon: FileText
  },
  {
    id: 'res-005',
    name: 'Management Review Meeting Agenda',
    type: 'Template',
    standard: 'ISO 9001',
    description: 'A template agenda for conducting effective QMS management review meetings.',
    fileUrl: '#',
    icon: FileText
  },
  {
    id: 'res-006',
    name: 'Supplier Evaluation Checklist',
    type: 'Checklist',
    standard: 'General',
    description: 'Checklist for evaluating and selecting new suppliers based on quality criteria.',
    fileUrl: '#',
    icon: ListChecks
  },
];

const resourceTypes = ['All Types', 'Template', 'Checklist', 'Audit Report', 'Guide'];
const isoStandards = ['All Standards', 'ISO 9001', 'ISO 27001', 'ISO 19011', 'ISO 14001', 'General'];

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedStandard, setSelectedStandard] = useState('All Standards');

  const filteredResources = useMemo(() => {
    return mockResources.filter(resource => {
      const matchesSearchTerm = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All Types' || resource.type === selectedType;
      const matchesStandard = selectedStandard === 'All Standards' || resource.standard === selectedStandard;
      return matchesSearchTerm && matchesType && matchesStandard;
    });
  }, [searchTerm, selectedType, selectedStandard]);

  return (
    <div className="container mx-auto py-10 px-4 md:px-0">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Resource Center</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Access valuable templates, checklists, audit reports, and guides to support your ISO compliance journey.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className="mb-10 p-6 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          {/* Search Input */}
          <div className="md:col-span-1">
            <label htmlFor="search-resources" className="block text-sm font-medium text-gray-700 mb-1">Search Resources</label>
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                id="search-resources"
                className="form-input pl-10 block w-full"
                placeholder="e.g., Audit Report, QMS Template"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Filter by Type */}
          <div>
            <label htmlFor="resource-type" className="block text-sm font-medium text-gray-700 mb-1">Resource Type</label>
            <select 
              id="resource-type" 
              className="form-select block w-full"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {resourceTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          {/* Filter by Standard */}
          <div>
            <label htmlFor="iso-standard" className="block text-sm font-medium text-gray-700 mb-1">ISO Standard</label>
            <select 
              id="iso-standard" 
              className="form-select block w-full"
              value={selectedStandard}
              onChange={(e) => setSelectedStandard(e.target.value)}
            >
              {isoStandards.map(std => <option key={std} value={std}>{std}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Resource List */}
      <section>
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div key={resource.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
                <div className="flex items-center mb-3">
                  <resource.icon className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                  <h2 className="text-xl font-semibold text-gray-800 leading-tight">{resource.name}</h2>
                </div>
                <p className="text-xs text-gray-500 mb-1">
                  <span className="font-medium">Type:</span> {resource.type} | <span className="font-medium">Standard:</span> {resource.standard}
                </p>
                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed">{resource.description}</p>
                <a 
                  href={resource.fileUrl} 
                  download 
                  className="mt-auto w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
                >
                  <Download size={18} className="mr-2" />
                  Download Resource
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700">No Resources Found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ResourcesPage; 