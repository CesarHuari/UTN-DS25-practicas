import { Box, Typography, Grid } from '@mui/material';
import TarjetaLibro from '../components/TarjetaLibro';
import { useCatalogo } from '../context/ContextoCatálogo';

const PáginaSeccion = ({ claveSeccion, nombreSeccion }) => {
  const { libros } = useCatalogo();
  const librosDeSeccion = libros[claveSeccion] || [];

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          background: 'linear-gradient(135deg, #d2691e 0%, #f4a460 100%)',
          color: 'white',
          padding: '30px 20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" sx={{ mb: 1 }}>
          {nombreSeccion}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          Descubre nuestra selección completa de {nombreSeccion.toLowerCase()}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {librosDeSeccion.map((libro) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={libro.id}>
            <TarjetaLibro
              titulo={libro.titulo}
              autor={libro.autor}
              descripcion={libro.descripcion}
              imagen={libro.imagen}
              precio={libro.precio}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PáginaSeccion;
