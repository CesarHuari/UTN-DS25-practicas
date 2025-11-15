import React, { useState } from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material';
import TarjetaLibro from '../components/TarjetaLibro';
import { useCatalogo } from '../context/ContextoCatálogo';
import FormularioAgregarLibro from '../components/FormularioAgregarLibro';

const PáginaCatálogo = () => {
  const { obtenerTodosLosLibros } = useCatalogo();
  const [consulta, setConsulta] = useState('');

  const todosLosLibros = obtenerTodosLosLibros();
  const q = consulta.trim().toLowerCase();
  const filtrados = q
    ? todosLosLibros.filter((b) => (b.titulo || '').toLowerCase().includes(q) || (b.autor || '').toLowerCase().includes(q))
    : todosLosLibros;

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>Catálogo completo</Typography>

      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 3, flexWrap: 'wrap' }}>
        <TextField
          label="Buscar por título o autor"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          fullWidth
        />
      </Box>

      <Box sx={{ mb: 4 }}>
        <FormularioAgregarLibro />
      </Box>

      <Grid container spacing={3}>
        {filtrados.map((libro) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={`${libro.claveSeccion}-${libro.id}`}>
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

export default PáginaCatálogo;
