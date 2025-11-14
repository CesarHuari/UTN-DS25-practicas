import '../assets/css/section.css';

const BookCard = ({ title, author, description, image, price = '$19.99' }) => {
  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-card-image" />
      <div className="book-card-content">
        <h3 className="book-card-title">{title}</h3>
        <p className="book-card-author">por {author}</p>
        <p className="book-card-description">{description}</p>
        <div className="book-card-footer">
          <span className="book-price">{price}</span>
          <button className="book-button">Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
