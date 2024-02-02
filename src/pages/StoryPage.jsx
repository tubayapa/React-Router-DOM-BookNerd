
const StoryPage = () => {
  return (
    <div className="ms-5">
      <div>
        <h3 className="text-danger">Best selling story of BookNerd</h3>
      </div>
      <div className="d-flex align-items-center gap-4 mt-5">
        <div>
          <img className="img-fluid rounded-4"
            style={{ width: "250px" }}
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1609351986i/13382062.jpg"
            alt=""
          />
        </div>
        <div>
          <h5>
            <strong>Lamb to the Slaughter</strong>
          </h5>
          <p>Roald Dahl</p>
        </div>
      </div>
     
         
    </div>
  );
};

export default StoryPage;




