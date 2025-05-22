import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, BookOpen, Award, UserCircle, LogOut } from 'lucide-react'; // Added LogOut

const sidebarNavItems = [
  { name: 'My Courses', href: '/dashboard/my-courses', icon: BookOpen },
  { name: 'Certificates', href: '/dashboard/certificates', icon: Award },
  { name: 'Account Settings', href: '/dashboard/profile', icon: UserCircle },
];

const DashboardLayout: React.FC = () => {
  const location = useLocation();

  // Mock logout function
  const handleLogout = () => {
    alert('Logged out (mock)!');
    // In a real app, you would clear auth tokens and redirect to login
    // navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 space-y-6 fixed h-full shadow-lg">
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-semibold hover:text-blue-300 transition-colors">
            LearningPortal
          </Link>
        </div>
        <nav className="space-y-2">
          {sidebarNavItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-blue-600 text-white font-semibold' : 'hover:text-blue-300'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-6 left-0 right-0 px-6">
            <Link 
                to="/" 
                onClick={handleLogout} 
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-red-700 hover:text-white transition-colors text-gray-300"
            >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
            </Link>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 ml-64 p-6 md:p-10">
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default DashboardLayout; 