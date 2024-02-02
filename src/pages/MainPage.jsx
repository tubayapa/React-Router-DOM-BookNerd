import { Link } from "react-router-dom";
import gif from "../assets/welcome.gif";

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-2 my-4">
      <h2 >Hi Book Nerd!</h2>
      <img className="img-fluid rounded" style={{width:"400px"}} src={gif} />
      <p>
        You can access all <Link className="text-decoration-none" to={'/products'}>newly released books </Link> on the 
        products page.
      </p>
    </div>
  );
};

export default MainPage;
