import SearchBar from "../components/SearchBar";
import { useSearchProductsQuery } from "../redux/api/productApi";

import Product from "../components/Product/Product";
import ProductsList from "../components/ProductsList/ProductsList";

const HomePage = () => {
  const { data: productsList, isFetching: productsIsFetching } =
    useSearchProductsQuery();
  return (
    <main>
      <h1>E-store</h1>

      <SearchBar />

      <ProductsList
        productsList={productsList}
        productsIsFetching={productsIsFetching}
      />
    </main>
  );
};

export default HomePage;
