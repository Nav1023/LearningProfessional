import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Layout from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';
import MyCoursesPage from './pages/Dashboard/MyCourses';
import CertificatesPage from './pages/Dashboard/Certificates';
import ProfilePage from './pages/Dashboard/Profile';

interface MainLayoutWrapperProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

// Component to wrap routes that use the main Layout
const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ isAuthenticated, setIsAuthenticated }) => (
  <Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
    <Outlet /> 
  </Layout>
);

// ProtectedRoute component for dashboard
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Routes using the main Layout */}
        <Route element={<MainLayoutWrapper isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth routes (using their own AuthLayout or are modal-triggered) */}
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Dashboard routes (using DashboardLayout) - Protected */}
        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="my-courses" replace />} />
          <Route path="my-courses" element={<MyCoursesPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
