import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import CountryDetail from './pages/CountryDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:id" element={<CountryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
