import { useGetProductsQuery } from "../../redux/api/productApi";
import { useAdmin } from "../../hooks/useAdmin";
import Product from "../../components/Product/Product";

import "./AdminPage.css";

const AdminPage = () => {
  useAdmin();

  const { data: productsList, isFetching: productsIsFetching } =
    useGetProductsQuery();

  productsList?.map((prod) => {
    console.log(`http://localhost:5000/${prod.image}`);
  });

  return (
    <main>
      <h2>Admin Page</h2>

      {!productsIsFetching ? (
        <div className="products_admin_list">
          {productsList?.map((prod) => {
            return <Product key={prod._id} product={prod} isAdmin />;
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default AdminPage;
