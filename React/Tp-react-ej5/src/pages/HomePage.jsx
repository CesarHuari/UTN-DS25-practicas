import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import '../assets/css/home.css';
import { booksData, sections } from '../data/booksData';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="page-title">Bienvenido a Librería César</h1>
      
      <div className="sections-grid">
        {sections.map((section) => {
          const sectionKey = section.id === 'no-ficcion' ? 'noFiccion' 
                            : section.id === 'infantil' ? 'infantil'
                            : section.id === 'tecnico' ? 'tecnico'
                            : 'ficcion';
          
          const featuredBook = booksData[sectionKey].find(book => book.featured);

          return (
            <div key={section.id} className="section-card">
              <div className="section-card-header">
                <h2 className="section-card-title">{section.name}</h2>
                <p>{section.description}</p>
                <Link to={section.path} className="section-card-link">
                  Ver sección →
                </Link>
              </div>
              <div className="featured-book">
                <img 
                  src={featuredBook.image} 
                  alt={featuredBook.title}
                  className="featured-book-image"
                />
                <div className="featured-book-title">{featuredBook.title}</div>
                <div className="featured-book-author">{featuredBook.author}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
