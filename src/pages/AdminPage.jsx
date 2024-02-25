import React from "react";
import { useUser } from "../hooks/useUser";
import { useAccess } from "../hooks/useAccess";
import GenresList from "../components/GenresList";
import { useGetProductsQuery } from "../redux/api/productApi";

const AdminPage = () => {
  useAccess();

  const genres = ["action", "horror", "adventures"];

  const { data: productsList } = useGetProductsQuery();

  productsList?.map((prod) => {
    console.log(`http://localhost:5000/${prod.image}`);
  });

  return (
    <>
      <h2>Admin Page</h2>
      <GenresList genres={genres} />
      {productsList?.map((prod) => {
        return (
          <div key={prod._id}>
            {prod.name}
            <img src={`http://localhost:5000/${prod.image}`} alt="" />
          </div>
        );
      })}
    </>
  );
};

export default AdminPage;
