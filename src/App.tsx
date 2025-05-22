import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import ResourcesPage from './pages/ResourcesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CourseDetailPage from './pages/CourseDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import Layout from './layouts/Layout';
import DashboardLayout from './layouts/DashboardLayout';
import MyCoursesPage from './pages/Dashboard/MyCourses';
import CertificatesPage from './pages/Dashboard/Certificates';
import ProfilePage from './pages/Dashboard/Profile';

// Component to wrap routes that use the main Layout
const MainLayoutWrapper = () => (
  <Layout>
    <Outlet /> 
  </Layout>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes using the main Layout */}
        <Route element={<MainLayoutWrapper />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        {/* Auth routes (using their own AuthLayout) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Dashboard routes (using DashboardLayout) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
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
