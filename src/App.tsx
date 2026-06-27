import { Routes, Route, Navigate } from 'react-router';
import { ThemeProvider } from '@/context/ThemeContext';
import { LenisProvider } from '@/context/LenisContext';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = localStorage.getItem('admin_email');
  if (!isLoggedIn) {
    return <Navigate to="/dashboard/login" replace />;
  }
  return <>{children}</>;
};

export default function App() {
  return (
    <ThemeProvider>
      <LenisProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/dashboard/login" element={<Login />} />
        </Routes>
      </LenisProvider>
    </ThemeProvider>
  );
}
