import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ({ initialSearchString }) => {
  const [searchString, setSearchString] = useState(initialSearchString);

  console.log("search string => ", searchString);

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <Link
        to={`/search?searchString=${searchString}`}
        // className="pulse bounce"
      >
        Search
      </Link>
    </div>
  );
};

export default SearchBar;
