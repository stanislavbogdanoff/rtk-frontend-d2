import React from "react";
import { useUser } from "../hooks/useUser";
import { useAccess } from "../hooks/useAccess";

const AdminPage = () => {
  useAccess();

  // const user = useUser();

  // if (!user) {
  //   return <h1 className="alert">!!!ACCESS RESTRICTED!!!</h1>;
  // }

  return <h2>Admin Page</h2>;
};

export default AdminPage;
