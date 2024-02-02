import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const { state } = useLocation();

 

  return (
    <div className="container py-6 col-md-6 text-center">
      <img
        className="img-fluid rounded"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2ZncTk1YjRkZHp5N2Zyam1yajZvYTVnaWFmaTU5NThmanJsaHJhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.gif"
        alt=""
      />
      <p className="text-center my-4">
        Sorry, the page you are looking for could not be found.
      </p>
      <div className="d-flex justify-content-center ">
        <Link
          className="bg-primary text-white p-2 rounded text-decoration-none "
          to={"/"}
        >
          Home
        </Link>
      </div>

      {state && (
        <p className="fs-3 text-center my-4">
          Error Code <span className="badge bg-warning mx-4">{state}</span>
        </p>
      )}
    </div>
  );
};

export default NotFound;
