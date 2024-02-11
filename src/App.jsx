import { useState } from "react";
import "./App.css";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useLazySearchUsersQuery,
} from "./redux/api/usersApi";

function App() {
  const [userData, setUserData] = useState({
    name: null,
    age: null,
    jobTitle: null,
  });

  const [searchString, setSearchString] = useState("");

  console.log(searchString);

  const [createUser] = useCreateUserMutation();

  console.log("user data =>", userData);

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

  // if (usersIsFetching || usersIsLoading) {
  //   return <h1>Data is still loading...</h1>;
  // }

  const [searchUsers] = useLazySearchUsersQuery();

  return (
    <>
      <h1>RTK Query App</h1>

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