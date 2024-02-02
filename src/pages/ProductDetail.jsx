import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const [book, setBook] = useState(null);
  //1- take the parameter from url = book.id

  const navigate = useNavigate();

  const { id } = useParams();

  //2-take the information of the book according to the id

  useEffect(() => {
    axios
      .get(`http://localhost:3090/books/${id}`, { timeout: 3000 })
      .then((res) => setBook(res.data))
      .catch((err) => {
        // 404'e yonlendir
        navigate("/undefined", {state:err.response.status});
      });
  }, []);

  return (
    <div>
      {/* kitap gelmediyse bunu bas */}
      {!book && <p>Loading...</p>}

      {/* kitap geldiyse bunu bas */}
      {book && (
        <div className="row my-5 p-5">
          <div className="col-md-6 justify-content-center align-items-center ">
            <img
              className="rounded img-fluid shadow"
              style={{ maxHeight: "350px" }}
              src={book.image}
              alt={book.title}
            />
          </div>

          <div className="col-md-6 justify-content-center align-items-center my-3">
            <h1>{book.title}</h1>

            <div className="my-4 ">
              <BookInfo title={"Author"} value={book.author} />
              <BookInfo title={"Description"} value={book.description} />
              <BookInfo title={"Year"} value={book.year} />
              <BookInfo title={"Page"} value={book.page} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

const BookInfo = ({ title, value }) => {
  return (
    <p className="fs-5">
      <span className="badge  bg-danger me-3">{title}</span>
      <span>{value}</span>
    </p>
  );
};
