import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './config/DataContext';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
