import Image from 'next/image';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="flex justify-between items-center h-16 px-4 md:px-6 bg-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="p-2 -ml-2 md:hidden hover:bg-gray-100 rounded-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className='flex'>
        <img src="./logo.avif" alt="logo" className='bg-white w-16 h-14 mr-2'/>
        <div className="text-xl md:text-2xl font-bold mt-2">WhatBytes</div>
        
        </div>
        
      </div>
      <div className="flex items-center gap-2 md:gap-4">
      <div className="flex items-center space-x-4 border-black">
            <img
              src="./admin.png"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>Rahil Siddique</span>
          </div>
      </div>
    </div>
  );
}