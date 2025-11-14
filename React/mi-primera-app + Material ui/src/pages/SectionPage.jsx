import { Box, Typography, Grid } from '@mui/material';
import BookCard from '../components/BookCard';
import { booksData } from '../data/booksData';

const SectionPage = ({ sectionKey, sectionName }) => {
  const books = booksData[sectionKey] || [];

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
          {sectionName}
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.9 }}>
          Descubre nuestra selección completa de {sectionName.toLowerCase()}
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={book.id}>
            <BookCard
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              price={book.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionPage;
