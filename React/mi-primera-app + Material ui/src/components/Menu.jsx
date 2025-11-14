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
  const location = useLocation();

  const menuItems = [
    { label: 'Inicio', path: '/', icon: HomeIcon },
    { label: 'Ficción', path: '/ficcion', icon: MenuBookIcon },
    { label: 'No Ficción', path: '/no-ficcion', icon: AutoStoriesIcon },
    { label: 'Infantil', path: '/infantil', icon: ChildCareIcon },
    { label: 'Técnico', path: '/tecnico', icon: CodeIcon },
    { label: 'Registración', path: '/registro', icon: PersonAddIcon },
    { label: 'Contacto', path: '/contacto', icon: CallIcon },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: '#8b4513' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  startIcon={<Icon />}
                  sx={{
                    color: '#ecf0f1',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    borderBottom: isActive ? '3px solid #f4a460' : 'none',
                    borderRadius: '0px',
                    '&:hover': {
                      backgroundColor: '#d2691e',
                      borderBottomColor: '#f4a460',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.label}
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
