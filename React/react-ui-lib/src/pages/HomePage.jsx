import { Link as RouterLink } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { secciones } from '../data/booksData';
import { useCatalogo } from '../context/ContextoCatálogo';

const HomePage = () => {
  const { libros } = useCatalogo();
  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="h1"
        sx={{
          textAlign: 'center',
          mb: 4,
          pb: 2,
          borderBottom: '2px solid #d2691e',
        }}
      >
        Bienvenido a Librería César
      </Typography>

      <Grid container spacing={3}>
        {secciones.map((seccion) => {
          const claveSeccion = seccion.id === 'no-ficcion' ? 'noFiccion'
            : seccion.id === 'infantil' ? 'infantil'
              : seccion.id === 'tecnico' ? 'tecnico'
                : 'ficcion';
          const libroDestacado = (libros[claveSeccion] || []).find((libro) => libro.destacado) || (libros[claveSeccion] && libros[claveSeccion][0]) || { titulo: '', autor: '', imagen: '' };

          return (
            <Grid item xs={12} sm={6} md={6} lg={3} key={seccion.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(135deg, #d2691e 0%, #f4a460 100%)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    pb: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {seccion.nombre}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                    {seccion.descripcion}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={seccion.path}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      color: 'white',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                      },
                    }}
                  >
                    Ver sección
                  </Button>
                </CardContent>

                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <CardMedia
                    component="img"
                    image={libroDestacado.imagen}
                    alt={libroDestacado.titulo}
                    sx={{
                      height: 250,
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                <CardContent sx={{ backgroundColor: 'white', textAlign: 'center', py: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#2c3e50',
                      mb: 0.5,
                    }}
                  >
                    {libroDestacado.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#d2691e',
                      fontStyle: 'italic',
                    }}
                  >
                    {libroDestacado.autor}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default HomePage;
