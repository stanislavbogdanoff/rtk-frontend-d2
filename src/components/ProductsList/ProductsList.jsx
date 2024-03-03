import Product from "../Product/Product";

import "./ProductsList.css";

const ProductsList = ({ productsList, productsIsFetching }) => {
  if (productsIsFetching) return <div>Products list is loading</div>;

  return (
    <div className="products_list">
      {productsList && productsList.length > 0 ? (
        <>
          {productsList?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductsList;
