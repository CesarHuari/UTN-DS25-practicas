import { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Select,
  MenuItem,
  FormControl,
  Grid,
  Alert,
  Paper,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    sexo: '',
    temaFavorito: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        email: '',
        password: '',
        sexo: '',
        temaFavorito: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
          Crear Cuenta
        </Typography>

        <Paper sx={{ p: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                  placeholder="Tu apellido"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Fecha de Nacimiento"
                  name="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  required
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Contraseña"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Crea una contraseña segura"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel sx={{ mb: 1, color: '#2c3e50', fontWeight: 600 }}>
                    Sexo
                  </FormLabel>
                  <RadioGroup
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Select
                    name="temaFavorito"
                    value={formData.temaFavorito}
                    onChange={handleChange}
                    displayEmpty
                  >
                    <MenuItem value="">-- Selecciona un tema --</MenuItem>
                    <MenuItem value="ficcion">Ficción</MenuItem>
                    <MenuItem value="no-ficcion">No Ficción</MenuItem>
                    <MenuItem value="infantil">Infantil y Fantasía</MenuItem>
                    <MenuItem value="tecnico">Técnico</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<PersonAddIcon />}
                  sx={{
                    backgroundColor: '#8b4513',
                    '&:hover': {
                      backgroundColor: '#d2691e',
                    },
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                  }}
                  type="submit"
                >
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </form>

          {submitted && (
            <Alert severity="success" sx={{ mt: 2 }}>
              ¡Registro exitoso! Bienvenido a Librería César.
            </Alert>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterPage;
