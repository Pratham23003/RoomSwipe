import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Import pages (we'll create these next)
import Login from './pages/Login';
import Register from './pages/Register';
import Swipe from './pages/Swipe';
import Matches from './pages/Matches';
import Profile from './pages/Profile';

function App() {
  console.log('App component rendering');
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/swipe" element={<Swipe />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
