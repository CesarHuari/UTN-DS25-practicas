import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const TarjetaLibro = ({ titulo, autor, descripcion, imagen, precio = '0' }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="300"
        image={imagen}
        alt={titulo}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            color: '#2c3e50',
            minHeight: '2.4em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {titulo}
        </Typography>
        <Typography variant="body2" sx={{ color: '#d2691e', fontStyle: 'italic', mb: 1 }}>
          por {autor}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            lineHeight: 1.5,
            minHeight: '2.8em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {descripcion}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pt: 1,
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#8b4513',
          }}
        >
          {precio}
        </Typography>
        <Button
          size="small"
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          sx={{
            backgroundColor: '#d2691e',
            '&:hover': {
              backgroundColor: '#8b4513',
            },
          }}
        >
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
};

export default TarjetaLibro;
