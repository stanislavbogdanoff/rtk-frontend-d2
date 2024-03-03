import { useUser } from "../../hooks/useUser";
import { useGetUserDetailsQuery } from "../../redux/api/usersApi";

const UserPage = () => {
  const user = useUser();
  const {
    data: userData,
    isSuccess: userIsSuccess,
    isFetching: userIsFetching,
  } = useGetUserDetailsQuery(user?.token);

  if (userIsFetching) return <h1>Loading user data...</h1>;

  return (
    <main>
      {userIsSuccess && userData ? (
        <div>
          <h1>{userData.name} user profile</h1>
          <div className="orders_list">
            {userData.orders?.map((order) => {
              return (
                <div key={order._id}>
                  <div>{order.totalSum}</div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </main>
  );
};

export default UserPage;
