interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        w-64 bg-white fixed h-[calc(100vh-64px)] top-16 border-r z-30
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <nav className="p-4">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-gray-100 rounded">
              <a href="#" className="flex items-center gap-2">

                Dashboard
              </a>
            </li>
            <li className="p-2 bg-gray-100 rounded">
              <a href="#" className="flex items-center gap-2">

                Skill Test
              </a>
            </li>
            <li className="p-2 hover:bg-gray-100 rounded">
              <a href="#" className="flex items-center gap-2">

                Internship
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}