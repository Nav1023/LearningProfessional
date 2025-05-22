import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {BookOpen, Award, UserCircle, LogOut, Menu, X } from 'lucide-react';

const sidebarNavItems = [
  { name: 'My Courses', href: '/dashboard/my-courses', icon: BookOpen },
  { name: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { name: 'Account Settings', href: '/dashboard/profile', icon: UserCircle },
];

interface DashboardLayoutProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert('Logged out successfully!');
    navigate('/');
  };

  const SidebarContent = () => (
    <>
        <div className="text-center mb-10 pt-2">
            <Link to="/" className="text-2xl font-semibold hover:text-green-300 transition-colors">
            LearningPortal
            </Link>
        </div>
        <nav className="space-y-2 flex-grow">
            {sidebarNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
                <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 transition-colors ${
                    isActive ? 'bg-green-600 text-white font-semibold' : 'hover:text-green-300'
                }`}
                >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
                </Link>
            );
            })}
        </nav>
        <div className="pb-6 px-0">
            <Link 
                to="/" 
                onClick={handleLogout} 
                className="flex items-center space-x-3 p-3 rounded-md text-gray-300 hover:bg-red-700 hover:text-white transition-colors"
            >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
            </Link>
        </div>
    </>
  );

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Mobile header with Hamburger menu */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-gray-800 text-white flex items-center justify-between p-4 shadow-lg">
        <Link to="/" className="text-xl font-semibold hover:text-green-300 transition-colors">
          LearningPortal
        </Link>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-1 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
        >
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      {/* Mobile overlay sidebar */}
      {sidebarOpen && (
        <div 
            className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ease-linear"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
        ></div>
      )}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white p-6 flex flex-col space-y-6 shadow-lg transform transition-transform duration-300 ease-in-out 
                   ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:flex`}
      >
        <SidebarContent />
      </aside>

      {/* Main content area */}
      <main className="flex-1 lg:ml-0 p-6 md:p-10 pt-20 lg:pt-10">
         {/* Added pt-20 for mobile header space, lg:pt-10 to reset for large screens */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout; 