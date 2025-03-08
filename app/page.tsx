'use client';

import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuickStats from './components/QuickStats';
import ComparisonGraph from './components/ComparisonGraph';
import SyllabusAnalysis from './components/SyllabusAnalysis';
import QuestionAnalysis from './components/QuestionAnalysis';
import UpdateModal from './components/UpdateModal';
import Image from 'next/image';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    score: 10
  });

  const handleUpdateSave = (data: { rank: number; percentile: number; score: number }) => {
    setStats(data);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Full width header - fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />
      </div>
      
      {/* Sidebar - fixed */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Main content area - scrollable */}
      <div className="md:pl-64 pt-16">
        <main className="p-4 md:p-6">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-lg p-2 shadow-sm flex items-center justify-center">
                  <Image 
                    src="/html5.png" 
                    alt="HTML5"
                    width={48}
                    height={48}
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold">Hyper Text Markup Language</h1>
                  <p className="text-sm md:text-base text-gray-600">
                    Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                  </p>
                </div>
              </div>
              <button 
                className="w-full md:w-auto md:ml-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsModalOpen(true)}
              >
                Update
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <QuickStats stats={stats} />
              <ComparisonGraph percentile={stats.percentile} />
            </div>
            <div className="space-y-4 md:space-y-6">
              <SyllabusAnalysis />
              <QuestionAnalysis score={stats.score} />
            </div>
          </div>
        </main>
      </div>

      <UpdateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleUpdateSave}
        initialData={stats}
      />
    </div>
  );
}