import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SectionPage from './pages/SectionPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/ContactPage';
import './assets/css/variables.css';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ficcion" element={<SectionPage sectionKey="ficcion" sectionName="Ficción" />} />
          <Route path="/no-ficcion" element={<SectionPage sectionKey="noFiccion" sectionName="No Ficción" />} />
          <Route path="/infantil" element={<SectionPage sectionKey="infantil" sectionName="Infantil y Fantasía" />} />
          <Route path="/tecnico" element={<SectionPage sectionKey="tecnico" sectionName="Técnico" />} />
          <Route path="/registro" element={<RegisterPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
