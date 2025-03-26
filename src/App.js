import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import DashbordPage from './Components/DashbordPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PricingPage from './Components/PricingPage';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<DashbordPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>


    </div>
  );
}

export default App;
