import logo from './logo.svg';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Questions from './Pages/Questions';


function App() {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/questions' element={<Questions />} />
      <Route path='*' element={<Navigate to='/dashboard' />} />
    </Routes>
  );
}

export default App;