import { Box, Container, Grid, Typography, Link, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FacebookIcon, url: '#', label: 'Facebook' },
    { icon: TwitterIcon, url: '#', label: 'Twitter' },
    { icon: InstagramIcon, url: '#', label: 'Instagram' },
    { icon: YouTubeIcon, url: '#', label: 'YouTube' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '40px 20px 20px',
        marginTop: 'auto',
        borderTop: '3px solid #d2691e',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Sobre nosotros */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#f4a460', mb: 2 }}>
              📚 Sobre Librería César
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Somos tu librería en línea de confianza. Ofrecemos los mejores títulos en diversos géneros para todos nuestros clientes.
            </Typography>
          </Grid>

          {/* Sígue */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#f4a460', mb: 2 }}>
              Síguenos
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.url}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      backgroundColor: '#d2691e',
                      color: '#ecf0f1',
                      borderRadius: '50%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#f4a460',
                        transform: 'scale(1.2)',
                      },
                    }}
                  >
                    <Icon />
                  </Link>
                );
              })}
            </Stack>
          </Grid>

          {/*Información */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#f4a460', mb: 2 }}>
              Información
            </Typography>
            <Stack spacing={1}>
              <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', '&:hover': { color: '#f4a460' } }}>
                Acerca de nosotros
              </Link>
              <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', '&:hover': { color: '#f4a460' } }}>
                Preguntas frecuentes
              </Link>
              <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', '&:hover': { color: '#f4a460' } }}>
                Envíos
              </Link>
              <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', '&:hover': { color: '#f4a460' } }}>
                Devoluciones
              </Link>
            </Stack>
          </Grid>

          {/*  Contacto */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ color: '#f4a460', mb: 2 }}>
              Contacto
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">
                📞 +54 11 4567-8901
              </Typography>
              <Typography variant="body2">
                ✉️ info@libreriacecar.com
              </Typography>
              <Typography variant="body2">
                📍 Buenos Aires, Argentina
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid #555',
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2">
            &copy; {currentYear} Librería César. Todos los derechos reservados.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#f4a460' } }}>
              Términos y Condiciones
            </Link>
            <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#f4a460' } }}>
              Política de Privacidad
            </Link>
            <Link href="#" sx={{ color: '#ecf0f1', textDecoration: 'none', fontSize: '0.875rem', '&:hover': { color: '#f4a460' } }}>
              Política de Cookies
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
