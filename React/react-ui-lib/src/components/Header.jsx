import { Box, Container, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Header = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #8b4513 0%, #d2691e 100%)',
        color: '#ecf0f1',
        padding: '40px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1 }}>
          <LibraryBooksIcon sx={{ fontSize: '2.5rem' }} />
          <Typography
            component="h1"
            sx={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              margin: 0,
            }}
          >
            Librería César
          </Typography>
        </Box>
        <Typography
          component="p"
          sx={{
            fontSize: '1.2rem',
            opacity: 0.9,
            fontStyle: 'italic',
            margin: 0,
          }}
        >
          Tu tienda de libros en línea
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
