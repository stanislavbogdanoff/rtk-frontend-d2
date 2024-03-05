import { useUser } from "../../hooks/useUser";
import { useGetUserDetailsQuery } from "../../redux/api/usersApi";

import "./UserPage.css";

const UserPage = () => {
  const user = useUser();

  const {
    data: userData,
    isSuccess: userIsSuccess,
    isFetching: userIsFetching,
  } = useGetUserDetailsQuery(user?.token);

  console.log("orders => ", userData?.orders);

  if (userIsFetching) return <h1>Loading user data...</h1>;

  return (
    <main>
      {userIsSuccess && userData ? (
        <div>
          <h1>{userData.name} user profile</h1>
          <div className="orders_list">
            {userData.orders?.map((order) => {
              return (
                <div key={order._id} className="order_card">
                  <div>Sum: {order.totalSum}</div>
                  <div className="order_products_list">
                    {order.orderProducts?.map((productItem) => {
                      return (
                        <div
                          key={productItem._id}
                          className="order_product_card"
                        >
                          <div>Name: {productItem.product.name}</div>
                          <div>Amount: {productItem.amount}</div>
                          <div>Price: {productItem.product.price}</div>
                        </div>
                      );
                    })}
                  </div>
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
