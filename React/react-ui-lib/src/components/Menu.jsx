import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CodeIcon from '@mui/icons-material/Code';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CallIcon from '@mui/icons-material/Call';

const Menu = () => {
  const ubicacion = useLocation();

  const elementosMenu = [
    { etiqueta: 'Inicio', path: '/', icono: HomeIcon },
    { etiqueta: 'Ficción', path: '/ficcion', icono: MenuBookIcon },
    { etiqueta: 'No Ficción', path: '/no-ficcion', icono: AutoStoriesIcon },
    { etiqueta: 'Infantil', path: '/infantil', icono: ChildCareIcon },
    { etiqueta: 'Técnico', path: '/tecnico', icono: CodeIcon },
    { etiqueta: 'Catálogo', path: '/catalogo', icono: MenuBookIcon },
    { etiqueta: 'Registración', path: '/registro', icono: PersonAddIcon },
    { etiqueta: 'Contacto', path: '/contacto', icono: CallIcon },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8b4513' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {elementosMenu.map((elemento) => {
              const Icono = elemento.icono;
              const esActivo = ubicacion.pathname === elemento.path;
              return (
                <Button
                  key={elemento.path}
                  component={RouterLink}
                  to={elemento.path}
                  startIcon={<Icono />}
                  sx={{
                    color: '#ecf0f1',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    borderBottom: esActivo ? '3px solid #f4a460' : 'none',
                    borderRadius: '0px',
                    '&:hover': {
                      backgroundColor: '#d2691e',
                      borderBottomColor: '#f4a460',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {elemento.etiqueta}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Menu;
