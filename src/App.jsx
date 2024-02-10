import { useState } from "react";
import "./App.css";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
} from "./redux/api/usersApi";

function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: null,
    jobTitle: "",
  });

  console.log(userData);

  const [
    deleteUser,
    {
      isLoading: userIsDeleting,
      isSuccess: userIsDeleted,
      isError: userDeleteSuccess,
    },
  ] = useDeleteUserMutation();

  const {
    data: usersData,
    isLoading: usersIsLoading,
    isFetching: usersIsFetching,
    isError: usersIsError,
  } = useGetUsersQuery();

  console.log(
    "users data from backend",
    usersIsLoading,
    usersIsFetching,
    usersIsError,
    usersData
  );

  const [createUser] = useCreateUserMutation();

  // if (usersIsFetching || usersIsLoading) {
  //   return <h1>Data is still loading...</h1>;
  // }

  return (
    <>
      <h1>RTK Query App</h1>

      <div className="data-input-box">
        <h2>Input New User Data:</h2>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            // spread operator
            setUserData({ ...userData, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setUserData({ ...userData, age: Number(e.target.value) });
          }}
        />
        <input
          type="text"
          placeholder="job title"
          onChange={(e) => {
            setUserData({ ...userData, jobTitle: e.target.value });
          }}
        />
        <button onClick={() => createUser(userData)}>Create User</button>
      </div>

      <div className="users-box">
        {usersData?.map((user) => {
          return (
            <div key={user._id} className="user-card">
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.jobTitle}</p>
              <button
                onClick={() => deleteUser(user._id)}
                disabled={userIsDeleting}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
