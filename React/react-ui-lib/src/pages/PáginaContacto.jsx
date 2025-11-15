import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
  Alert,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import SendIcon from '@mui/icons-material/Send';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
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
    console.log('Mensaje de contacto:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: LocationOnIcon,
      title: 'Dirección',
      content: ['Librería César', 'Calle Principal 123', 'Buenos Aires, Argentina 1425'],
    },
    {
      icon: PhoneIcon,
      title: 'Teléfono',
      content: ['Principal: +54 11 4567-8901', 'Atención al Cliente: +54 11 4567-8902', 'Horario: Lun-Vie 9:00-18:00'],
    },
    {
      icon: EmailIcon,
      title: 'Email',
      content: ['General: info@libreriacecar.com', 'Soporte: soporte@libreriacecar.com', 'Ventas: ventas@libreriacecar.com'],
    },
    {
      icon: LanguageIcon,
      title: 'Síguenos',
      content: ['Facebook: @LibreriaCesar', 'Instagram: @LibreriaCesar', 'Twitter: @LibreriaCesar'],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>
          Contáctanos
        </Typography>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                  <Icon
                    sx={{
                      fontSize: '2.5rem',
                      color: '#d2691e',
                      mb: 1,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#8b4513' }}>
                    {info.title}
                  </Typography>
                  <Stack spacing={0.5}>
                    {info.content.map((line, idx) => (
                      <Typography key={idx} variant="body2">
                        {line}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" sx={{ mb: 3, color: '#8b4513' }}>
                Envíanos tu Mensaje
              </Typography>

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
                      placeholder="Tu nombre completo"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
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
                      label="Asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      placeholder="Asunto de tu consulta"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      multiline
                      rows={5}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      size="large"
                      startIcon={<SendIcon />}
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
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {submitted && (
                <Alert severity="success" sx={{ mt: 2 }}>
                  ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
                </Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;
