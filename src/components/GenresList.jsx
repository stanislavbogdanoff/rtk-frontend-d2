import React from "react";

const GenresList = ({ genres }) => {
  return (
    <div>
      {genres?.map((genre, index) => {
        return (
          <h2 key={genre}>
            {genre}
            {index === genres?.length - 1 ? "" : ", "}
          </h2>
        );
      })}
    </div>
  );
};

export default GenresList;
