import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface Diagnosis {
  id: string;
  patientName: string;
  date: string;
  result: string;
}

const DiagnosisHistory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data for demonstration
  const diagnoses: Diagnosis[] = [
    { id: '1', patientName: 'John Doe', date: '2023-03-15', result: 'Yin Deficiency' },
    { id: '2', patientName: 'Jane Smith', date: '2023-03-14', result: 'Qi Stagnation' },
    { id: '3', patientName: 'Alice Johnson', date: '2023-03-13', result: 'Blood Deficiency' },
    { id: '4', patientName: 'Bob Williams', date: '2023-03-12', result: 'Yang Deficiency' },
    { id: '5', patientName: 'Charlie Brown', date: '2023-03-11', result: 'Phlegm-Dampness' },
    { id: '6', patientName: 'Diana Ross', date: '2023-03-10', result: 'Liver Qi Stagnation' },
    { id: '7', patientName: 'Edward Norton', date: '2023-03-09', result: 'Spleen Qi Deficiency' },
    { id: '8', patientName: 'Fiona Apple', date: '2023-03-08', result: 'Kidney Yin Deficiency' },
    { id: '9', patientName: 'George Clooney', date: '2023-03-07', result: 'Heart Blood Deficiency' },
    { id: '10', patientName: 'Helen Mirren', date: '2023-03-06', result: 'Lung Yin Deficiency' },
    { id: '11', patientName: 'Ian McKellen', date: '2023-03-05', result: 'Stomach Heat' },
    { id: '12', patientName: 'Julia Roberts', date: '2023-03-04', result: 'Blood Stasis' },
  ];

  const filteredDiagnoses = diagnoses.filter(
    (diagnosis) =>
      diagnosis.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      diagnosis.result.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredDiagnoses.length / itemsPerPage);
  const paginatedDiagnoses = filteredDiagnoses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Diagnosis History</h1>
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by patient name or diagnosis"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {paginatedDiagnoses.map((diagnosis) => (
            <li key={diagnosis.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="font-medium text-indigo-600 truncate">{diagnosis.patientName}</p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span>Date: {diagnosis.date}</span>
                      <span className="ml-6 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {diagnosis.result}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0">
                  <button className="px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    View Details
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {pageCount > 1 && (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === pageCount}
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, filteredDiagnoses.length)}
                </span>{' '}
                of <span className="font-medium">{filteredDiagnoses.length}</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                {[...Array(pageCount)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === index + 1
                        ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === pageCount}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisHistory;