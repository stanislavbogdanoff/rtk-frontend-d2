import React, { useEffect, useState } from "react";
import {
  useGetItemsNumberInCartQuery,
  useGetUserDetailsQuery,
} from "../../redux/api/usersApi";
import { useUser } from "../../hooks/useUser";
import { useCreateOrderMutation } from "../../redux/api/orderApi";
import { useNavigate } from "react-router-dom";

import "./OrderPage.css";

const OrderPage = () => {
  const user = useUser();
  const navigate = useNavigate();
  const { data: userData } = useGetUserDetailsQuery(user?.token);
  const [cartProductsList, setCartProductsList] = useState(
    userData?.cart || []
  );

  console.log("cartProductsListc", cartProductsList);

  useEffect(() => {
    if (userData) setCartProductsList(userData.cart);
  }, [userData]);

  const [createOrder, { isSuccess: orderIsSuccess }] = useCreateOrderMutation();
  const { refetch } = useGetItemsNumberInCartQuery();

  useEffect(() => {
    console.log(`/profile/${user?._id}`);
    if (orderIsSuccess && user?.token) {
      navigate(`/profile/${user?._id}`);
    }
  }, [orderIsSuccess, navigate, user, refetch]);

  return (
    <main>
      <h1>New Order</h1>
      <div className="orders_list">
        {cartProductsList?.map((cartProduct) => {
          return (
            <div key={cartProduct?.product?._id} className="order_card">
              <div>Name: {cartProduct?.product?.name}</div>
              <div>Price: {cartProduct?.product?.price}</div>
              <div>Name: {cartProduct?.amount}</div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          createOrder({
            orderProducts: cartProductsList.map((prod) => ({
              product: prod.product._id,
              amount: prod.amount,
            })),
            token: user?.token,
          }).then(() => refetch(user?.token));
        }}
      >
        Create Order
      </button>
    </main>
  );
};

export default OrderPage;
