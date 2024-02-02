import { useSearchParams } from "react-router-dom";

const FilterArea = () => {
  // allows us to manage the search parameters in the url 
  
  // returns 2 elements in the array
  
  // 1- search parameters in the url
  
  // 2- method to change them

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    searchParams.set("sort", e.target.value);
    setSearchParams(searchParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchParams.set("searchTerm", e.target[0].value);
    console.log(e.target[0].value)
    setSearchParams(searchParams);
  };

  return (
    <div className="d-flex mt-4  gap-3 justify-content-between align-items-center ">
      <div className="d-flex justify-content-between  gap-3 align-items-center " style={{width: "260px"}}>
        <label className="fs-8 text-nowrap ">Sort by Name</label>
        <select className="form-select" onChange={handleChange}>
          <option>a-z</option>
          <option>z-a</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="d-flex  gap-2">
        <input
          className="form-control"
          type="text"
          placeholder="Enter a book name"
        />

        <button className="btn btn-primary">search</button>
      </form>
    </div>
  );
};

export default FilterArea;
