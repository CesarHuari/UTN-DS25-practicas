import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Alert } from '@mui/material';
import { secciones } from '../data/booksData';
import { useCatalogo } from '../context/ContextoCatálogo';

const obtenerClaveSeccion = (id) => {
  if (id === 'no-ficcion') return 'noFiccion';
  if (id === 'infantil') return 'infantil';
  if (id === 'tecnico') return 'tecnico';
  return 'ficcion';
};

const FormularioAgregarLibro = () => {
  const { agregarLibro } = useCatalogo();
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [idSeccion, setIdSeccion] = useState(secciones[0].id);
  const [estado, setEstado] = useState(null);

  const manejarEnvio = (e) => {
    e.preventDefault();
    const clave = obtenerClaveSeccion(idSeccion);
    const imagen = 'https://via.placeholder.com/300x400?text=Portada';
    setEstado(null);
    try {
      const creado = agregarLibro(clave, { titulo, autor, descripcion, precio: precio || '0', imagen });
      setEstado({ tipo: 'exito', mensaje: 'Libro agregado correctamente.' });
      setTitulo(''); setAutor(''); setDescripcion(''); setPrecio('');
    } catch (err) {
      console.error('Error en FormularioAgregarLibro:', err);
      setEstado({ tipo: 'error', mensaje: 'No se pudo agregar el libro.' });
    }
    setTimeout(() => setEstado(null), 3000);
  };

  return (
    <Box component="form" onSubmit={manejarEnvio} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
      <Typography sx={{ minWidth: 200, fontWeight: 600 }}>Agregar libro</Typography>
      <TextField label="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <TextField label="Autor" value={autor} onChange={(e) => setAutor(e.target.value)} required />
      <TextField label="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} sx={{ minWidth: 260 }} />
      <TextField label="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} sx={{ width: 120 }} />
      <TextField select label="Sección" value={idSeccion} onChange={(e) => setIdSeccion(e.target.value)} sx={{ width: 180 }}>
        {secciones.map((s) => (
          <MenuItem key={s.id} value={s.id}>{s.nombre}</MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#d2691e' }}>Agregar</Button>
      {estado && (
        <Box sx={{ width: '100%', mt: 1 }}>
          <Alert severity={estado.tipo === 'exito' ? 'success' : 'error'}>{estado.mensaje}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default FormularioAgregarLibro;
