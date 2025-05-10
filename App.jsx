import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashboard';
import Feedback from './components/Feedback';
import Profile from './components/Profile';

function App() {
  const [role, setRole] = useState(null); // 'admin' or 'employee'

  if (!role) return <Login setRole={setRole} />;
  if (role === 'admin') return <AdminDashboard setRole={setRole} />;
  if (role === 'employee') return <EmployeeDashboard setRole={setRole} />;
}

export default App;
