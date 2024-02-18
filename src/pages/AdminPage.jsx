import React from "react";
import { useUser } from "../hooks/useUser";
import { useAccess } from "../hooks/useAccess";

const AdminPage = () => {
  useAccess();
  // const user = useUser();

  // console.log(user, "admin page");

  return <div>AdminPage</div>;
};

export default AdminPage;
