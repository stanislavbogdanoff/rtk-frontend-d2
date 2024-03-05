import SearchBar from "../../components/SearchBar";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useSearchProductsQuery } from "../../redux/api/productApi";
import { useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [params] = useSearchParams();

  params.searchString;

  const {
    data: productsList,
    isFetching: productsIsFetching,
    isSuccess,
    isLoading,
    isError,
  } = useSearchProductsQuery(params.get("searchString"));

  console.log("productsIsFetching", productsIsFetching);

  return (
    <main>
      <section className="search_section">
        <SearchBar initialSearchString={params.get("searchString")} />
      </section>
      <section className="product_section">
        <ProductsList
          productsList={productsList}
          productsIsFetching={productsIsFetching}
        />
      </section>
    </main>
  );
};

export default SearchPage;
