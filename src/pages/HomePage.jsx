import { useState } from "react";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useLazySearchUsersQuery,
} from "../redux/api/usersApi";
import { useUser } from "../hooks/useUser";
import ProductForm from "../components/ProductForm";
import UsersList from "../components/UsersList";

const HomePage = () => {
  const [userData, setUserData] = useState({
    name: null,
    age: null,
    jobTitle: null,
  });

  const [searchString, setSearchString] = useState("");

  const [createUser] = useCreateUserMutation();

  const [
    deleteUser,
    {
      isLoading: userIsDeleting,
      isSuccess: userIsDeleted,
      isError: userDeleteSuccess,
    },
  ] = useDeleteUserMutation();

  const user = useUser();

  const {
    data: usersData,
    isLoading: usersIsLoading,
    isFetching: usersIsFetching,
    isError: usersIsError,
  } = useGetUsersQuery(user?.token);

  const [searchUsers] = useLazySearchUsersQuery();

  if (usersIsFetching || usersIsLoading) {
    return <h1>Data is still loading...</h1>;
  }

  return (
    <>
      <h1>RTK Query App</h1>

      <ProductForm />

      <div>
        <h2>Search Users:</h2>
        <input
          type="text"
          placeholder="name OR job title"
          value={searchString}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <button onClick={() => searchUsers(searchString)}>Search</button>
      </div>

      <div className="input-box">
        <h2>New User Data Input</h2>
        <input
          type="text"
          placeholder="name"
          value={userData.name}
          onChange={(event) => {
            setUserData({ ...userData, name: event.target.value });
          }}
        />
        <input
          type="number"
          placeholder="age"
          value={userData.age}
          onChange={(event) => {
            setUserData({ ...userData, age: Number(event.target.value) });
          }}
        />
        <input
          type="text"
          placeholder="job title"
          value={userData.jobTitle}
          onChange={(event) => {
            setUserData({ ...userData, jobTitle: event.target.value });
          }}
        />
        <button
          onClick={() => {
            createUser(userData);
            setUserData({
              name: null,
              age: null,
              jobTitle: null,
            });
          }}
        >
          Create User
        </button>
      </div>

      <UsersList
        usersData={usersData}
        userIsDeleting={userIsDeleting}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default HomePage;
