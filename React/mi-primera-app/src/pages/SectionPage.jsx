import BookCard from '../components/BookCard';
import '../assets/css/section.css';
import { booksData } from '../data/booksData';

const SectionPage = ({ sectionKey, sectionName }) => {
  const books = booksData[sectionKey] || [];

  return (
    <div className="section-page">
      <div className="section-header">
        <h1>{sectionName}</h1>
        <p>Descubre nuestra selección completa de {sectionName.toLowerCase()}</p>
      </div>

      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionPage;
