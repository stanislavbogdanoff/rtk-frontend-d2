import { Link } from "react-router-dom";

import "./Pagination.css";

const Pagination = ({ isSearch, totalPages, searchString }) => {
  if (totalPages === 1) return <></>;
  let pagesArray = [];

  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push(i);
  }

  console.log(totalPages, pagesArray);

  return (
    <div className="pagination">
      {pagesArray.map((page) => (
        <>
          {isSearch && (
            <Link
              to={`/search?searchString=${searchString}&page=${page}`}
              className="pagination_btn"
            >
              {page}
            </Link>
          )}
        </>
      ))}
    </div>
  );
};

export default Pagination;
