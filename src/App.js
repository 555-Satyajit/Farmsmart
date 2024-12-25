import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from './LandingPage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AgronomistDashboard from './AgronomistDashboard';
import FarmerDashboard from './FarmerDashboard';
import UnauthorizedPage from './UnauthorizedPage';

=======
import LandingPage from './LandingPage'; // Importing the LandingPage component
>>>>>>> 4e840f0d318d6c3669c78e8cca292fc561c84cae

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <AuthProvider>
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route 
              path="/agronomist/*" 
              element={
                <ProtectedRoute allowedRoles={['Agronomist']}>
                  <AgronomistDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/farmer/*" 
              element={
                <ProtectedRoute allowedRoles={['Farmer']}>
                  <FarmerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
=======
      <LandingPage /> {/* Rendering the LandingPage component */}
    </div>
  );
}

>>>>>>> 4e840f0d318d6c3669c78e8cca292fc561c84cae
export default App;
