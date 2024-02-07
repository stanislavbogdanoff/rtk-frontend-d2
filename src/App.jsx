import "./App.css";
import { useDeleteUserMutation, useGetUsersQuery } from "./redux/api/usersApi";

function App() {
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

  // if (usersIsFetching || usersIsLoading) {
  //   return <h1>Data is still loading...</h1>;
  // }

  return (
    <>
      <h1>RTK Query App</h1>

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
