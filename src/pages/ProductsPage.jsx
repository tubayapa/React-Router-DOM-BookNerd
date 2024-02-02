import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import FilterArea from "../components/FilterArea";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [books, setBooks] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // react to parameter Url

  const order = searchParams.get("sort");
  const query = searchParams.get("searchTerm");

  // console.log(order, query);


  const options = {
    params: {
      _sort: order === "z-a" ? "-title" : "title",
      q: query,
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:3090/books", options)

      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [order, query]);

  return (
    <div className="mx-5 mt-4 h-100 ">
      <h5>{books?.length} books are found</h5>

      <FilterArea />
      <div className="card-container ">
        {books?.map((book) => (
          <Card book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
