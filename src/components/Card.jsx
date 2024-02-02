import { Link } from "react-router-dom";

const Card = ({ book }) => {
  // console.log(book);
  return (
    <div className="card shadow rounded p-1">
      <img src={book.image} alt={book.title} />

      <div className="card-body">
        <h5 className="text-center text-truncate">{book.title}</h5>
        <h6 className="text-center">{book.author}</h6>
        <Link to={`/product/${book.id}`} className="btn btn-primary w-100  mt-3">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
