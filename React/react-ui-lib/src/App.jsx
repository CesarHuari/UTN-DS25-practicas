import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PáginaSeccion from './pages/PáginaSeccion';
import PáginaRegistro from './pages/PáginaRegistro';
import PáginaContacto from './pages/PáginaContacto';
import PáginaCatálogo from './pages/PáginaCatálogo';
import theme from './theme';
import { ProveedorCatalogo } from './context/ContextoCatálogo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ProveedorCatalogo>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ficcion" element={<PáginaSeccion claveSeccion="ficcion" nombreSeccion="Ficción" />} />
              <Route path="/no-ficcion" element={<PáginaSeccion claveSeccion="noFiccion" nombreSeccion="No Ficción" />} />
              <Route path="/infantil" element={<PáginaSeccion claveSeccion="infantil" nombreSeccion="Infantil y Fantasía" />} />
              <Route path="/tecnico" element={<PáginaSeccion claveSeccion="tecnico" nombreSeccion="Técnico" />} />
              <Route path="/registro" element={<PáginaRegistro />} />
              <Route path="/contacto" element={<PáginaContacto />} />
              <Route path="/catalogo" element={<PáginaCatálogo />} />
            </Routes>
          </Layout>
        </ProveedorCatalogo>
      </Router>
    </ThemeProvider>
  );
}

export default App;
