import React from "react";
import { useUser } from "../hooks/useUser";
import { useAccess } from "../hooks/useAccess";
import GenresList from "../components/GenresList";

const AdminPage = () => {
  useAccess();

  const genres = ["action", "horror", "adventures"];

  return (
    <>
      <h2>Admin Page</h2>
      <GenresList genres={genres} />
    </>
  );
};

export default AdminPage;
